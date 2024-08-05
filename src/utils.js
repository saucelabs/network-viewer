import { TIMINGS, TIMELINE_DATA_POINT_HEIGHT, FILTER_OPTION } from './constants';

/* eslint no-underscore-dangle: 0 */

export const roundOff = (value, decimal = 1) => {
  const base = 10 ** decimal;
  return Math.round(value * base) / base;
};

export const formatSize = (bytes) => {
  if (bytes < 1024) {
    return `${roundOff(bytes)} B`;
  }
  if (bytes < (1024 ** 2)) {
    return `${roundOff(bytes / 1024)} KB`;
  }
  return `${roundOff(bytes / (1024 ** 2))} MB`;
};

export const formatTime = (time) => {
  if (time < 1000) {
    return `${Math.round(time)}ms`;
  }
  if (time < 60000) {
    return `${Math.ceil(time / 10) / 100}s`;
  }
  return `${(Math.ceil(time / 60000) * 100) / 100}m`;
};

export const getUrlInfo = (url) => {
  // If there's an invalid URL (resource identifier, etc) the constructor would throw an exception.
  // Return a 'placeholder' object with default values in the event the passed value cannot be
  // parsed.
  try {
    const urlInfo = new URL(url);
    const pathSplit = urlInfo.pathname.split('/');
    const fileName = (
      pathSplit[pathSplit.length - 1].trim() ?
        pathSplit[pathSplit.length - 1] : pathSplit[pathSplit.length - 2]
    ) + urlInfo.search;

    return {
      domain: urlInfo.host,
      filename: fileName || urlInfo.href,
      url: urlInfo.href,
    };
  } catch (er) {
    return {
      domain: 'N/A',
      filename: url ?? 'N/A',
      url,
    };
  }
};

export const parseSize = ({
  bodySize,
  _transferSize,
  headers,
  content,
}) => {
  if (content && content.size) {
    return formatSize(content.size);
  }
  if (_transferSize > -1) {
    return formatSize(_transferSize);
  }
  if (bodySize > -1) {
    return formatSize(bodySize);
  }
  const contentInfo = headers.find(({ name }) => ['content-length', 'Content-Length'].includes(name));
  if (!contentInfo) {
    return 0;
  }

  return formatSize(contentInfo.value);
};

export const getContentType = (entry) => {
  if (entry._resourceType) {
    return entry._resourceType.toLowerCase();
  }

  const { headers } = entry.response;
  const contentInfo = headers.find(({ name }) => ['content-type', 'Content-Type'].includes(name));
  if (!contentInfo) {
    return '';
  }
  const type = contentInfo.value.split(';')[0].split('/');
  return type.length > 1 ? type[1] : type[0];
};

export const getTimings = ({
  startedDateTime,
  timings,
}, firstEntryTime) => ({
  ...timings,
  startTime: new Date(startedDateTime).getTime() - new Date(firstEntryTime).getTime(),
});

export const getContent = ({
  mimeType,
  text,
}) => {
  if (mimeType === 'application/json') {
    let parsedJson = text;
    try {
      parsedJson = JSON.stringify(JSON.parse(text), null, 2);
    } catch (err) {
      parsedJson = text;
    }
    return parsedJson;
  }

  return text;
};

export const getEntryTransferredSize = ({ response }) => {
  const {
    bodySize,
    _transferSize,
  } = response;
  if (_transferSize > -1) {
    return _transferSize;
  }

  if (bodySize > -1) {
    return bodySize;
  }
  return -1;
};

export const getEntryUncompressedSize = ({ response }) => {
  const {
    bodySize,
    _transferSize,
    content: { size },
  } = response;
  if (size > 0) {
    return size;
  }
  if (_transferSize > -1) {
    return _transferSize;
  }
  if (bodySize > -1) {
    return bodySize;
  }
  return -1;
};

export const calculateFinishTime = (data) => {
  const finishTimes = data.map(({ timings }) => (
    Object.values(timings)
      .reduce((acc, durationInMS) => (
        acc + (durationInMS > -1 ? durationInMS : 0)
      ), 0)));
  return Math.max(...finishTimes);
};

export const sortHeaders = (current, next) => {
  if (current.name < next.name) {
    return -1;
  }
  return current.name > next.name ? 1 : 0;
};

export const getHeaders = (entry) => {
  const requestHeaders = [...entry.request.headers];
  const responseHeaders = [...entry.response.headers];
  return {
    request: requestHeaders.sort(sortHeaders),
    response: responseHeaders.sort(sortHeaders),
    queryString: entry.request.queryString,
    postData: entry.request.postData,
  };
};

export const getTotalTimeOfEntry = ({
  startedDateTime,
  time,
  timings,
}) => (
  new Date(startedDateTime).getTime() + time + (timings?._blocked_queueing || timings?._queued || 0)
);

export const getInterceptError = ({ response }) => (
  response && response._error ? response._error : null
);

export const prepareViewerData = (entries) => {
  if (!entries.length) {
    return {
      totalNetworkTime: 0,
      data: [],
      totalRequests: 0,
      totalTransferredSize: 0,
      totalUncompressedSize: 0,
      finishTime: 0,
    };
  }

  const firstEntryTime = entries[0].startedDateTime;
  let endTime = getTotalTimeOfEntry(entries[entries.length - 1]);
  let totalTransferredSize = 0;
  let totalUncompressedSize = 0;
  const data = entries
    .filter((entry) => entry.response && getUrlInfo(entry.request.url).domain)
    .map((entry, index) => {
      totalTransferredSize += getEntryTransferredSize(entry);
      totalUncompressedSize += getEntryUncompressedSize(entry);
      const lastTimeOfEntry = getTotalTimeOfEntry(entry);
      endTime = endTime < lastTimeOfEntry ? lastTimeOfEntry : endTime;
      return {
        index: +entry.connection || index,
        status: entry.response.status,
        method: entry.request.method,
        size: parseSize(entry.response),
        startedDateTime: new Date(entry.startedDateTime).getTime(),
        type: getContentType(entry),
        timings: getTimings(entry, firstEntryTime),
        body: getContent(entry.response.content),
        time: entry.time,
        serverIPAddress: entry.serverIPAddress || ':80',
        headers: getHeaders(entry),
        transferredSize: getEntryTransferredSize(entry),
        uncompressedSize: getEntryUncompressedSize(entry),
        error: getInterceptError(entry),
        ...getUrlInfo(entry.request.url),
      };
    });

  const totalRequests = data.length;
  const totalNetworkTime = endTime - new Date(firstEntryTime).getTime();
  const finishTime = calculateFinishTime(data);
  return {
    totalNetworkTime,
    data,
    totalRequests,
    totalTransferredSize,
    totalUncompressedSize,
    finishTime,
  };
};

export const sortBy = (data, key, isAsc = true) => {
  const direction = isAsc ? 1 : -1;
  return data.sort((prev, next) => {
    const entryA = prev[key];
    const entryB = next[key];

    if (entryA < entryB) return -direction;
    if (entryA > entryB) return direction;
    return 0;
  });
};

const applyFilter = (filterOption, filter, entry) => {
  switch (filterOption) {
    case FILTER_OPTION.STATUS:
      return entry.status && entry.status.toString()
        .startsWith(filter.value);
    case FILTER_OPTION.TYPE:
      return entry.type && filter.value.includes(entry.type);
    case FILTER_OPTION.URL:
      return entry.url && entry.url.includes(filter.value);
    case FILTER_OPTION.BODY:
      return entry.body && entry.body.includes(filter.value);
    default:
      return true;
  }
};

export const filterData = ({
  data,
  search = {},
  statusFilter = {},
  typeFilter = {},
}) => {
  const trimmedSearch = search.value && search.value.trim();

  if (!trimmedSearch && !statusFilter.value && !typeFilter.value) {
    return data;
  }

  const filters = [
    {
      option: FILTER_OPTION.STATUS,
      filter: statusFilter,
    },
    {
      option: FILTER_OPTION.TYPE,
      filter: typeFilter,
    },
    {
      option: search.name,
      filter: { value: trimmedSearch },
    },
  ];

  return data.filter((entry) => filters.every(({
    option,
    filter,
  }) => !filter.value || applyFilter(option, filter, entry),
  ));
};

export const actionsWrapper = (actions = {}) => (dispatch, state) => Object.keys(actions)
  .reduce((modifiedActions, type) => ({
    ...modifiedActions,
    [type]: actions[type](dispatch, state),
  }), {});

export const parseTime = (time) => {
  if (!time) {
    return time;
  }

  if (time > 1000) {
    return `${(time / 1000).toFixed(2)} s`;
  }

  return `${time.toFixed(2)} ms`;
};

export const calcTotalTime = (data) => {
  const total = Object.keys(data)
    .filter((key) => !['_blocked_queueing', '_queued', 'startTime'].includes(key))
    .reduce((acc, key) => acc + data[key], 0);
  return total;
};

export const prepareTooltipData = (data) => ({
  queuedAt: parseTime(data.startTime),
  startedAt: parseTime(data.startTime + (data._blocked_queueing || data._queued || 0)),
  totalTime: parseTime(calcTotalTime(data)),
  ...(Object.keys(data)
    .reduce((acc, key) => {
      acc[key] = parseTime(data[key]);
      return acc;
    }, {})
  ),
});

export const getStatusClass = ({
  status,
  error,
}) => {
  if (status === 0 && !error) {
    return 'pending';
  }
  if (status >= 400 || error) {
    return 'error';
  }
  return '';
};

export const formatValue = (key, value, unit, request = {}) => {
  switch (key) {
    case 'time':
      return value === 0 && !request.error ? 'Pending' : parseTime(value);
    case 'status':
      if (request.error) {
        return '(failed)';
      }
      return value === 0 ? 'Pending' : value;
    default:
      return !unit ? value : `${value} ${unit}`;
  }
};

export const calcChartAttributes = (data, maxTime, cx, index, cy = null) => {
  const startTimePercent = (data.startTime / maxTime) * 100;
  let previousX = 0;
  let previousWidth = 0;
  const chartAttributes = [];

  Object.keys(TIMINGS)
    .forEach((key) => {
      const timingInfo = TIMINGS[key];
      const dataKey = Array.isArray(timingInfo.dataKey) ?
        timingInfo.dataKey.find((key) => data[key]) :
        timingInfo.dataKey;
      const value = data[dataKey];
      if (value <= 0) {
        return;
      }

      previousX += !previousWidth ? startTimePercent : previousWidth;
      previousWidth = value > 0 ? (value / maxTime) * 100 : 0;

      chartAttributes.push({
        width: `${previousWidth}%`,
        y: index ? ((index % 10) * (TIMELINE_DATA_POINT_HEIGHT + 1)) + 40 : cy,
        x: `${previousX}%`,
        fill: timingInfo.fill,
        key,
      });
    });

  return chartAttributes;
};

export const findIndexNearTimestamp = (data, exactTimestamp) => (
  data.reduce((
    {
      value,
      index,
    }, {
      startedDateTime: currentValue,
      index: currentIndex,
    }) => (
    Math.abs(currentValue - exactTimestamp) < Math.abs(value - exactTimestamp) ?
      {
        value: currentValue,
        index: currentIndex,
      } : {
        value,
        index,
      }
  ), {
    value: 0,
    index: 0,
  }).index
);

export const findIndexBeforeTimestamp = (data, exactTimestamp) => {
  const resultIndex = data.reverse()
    .findIndex(({ startedDateTime }) => startedDateTime <= exactTimestamp);
  return resultIndex < 0 ? 0 : data.size - (resultIndex + 1);
};

export const findIndexAfterTimestamp = (data, exactTimestamp) => (
  data.findIndex(({ startedDateTime }) => startedDateTime >= exactTimestamp)
);

export const findRequestIndex = ({
  data,
  timestamp,
  position,
}) => {
  switch (position) {
    case 'before':
      return findIndexBeforeTimestamp(data, timestamp);
    case 'after':
      return findIndexAfterTimestamp(data, timestamp);
    case 'near':
    default:
      return findIndexNearTimestamp(data, timestamp);
  }
};

export const calculateTimings = (pages) => (
  pages.reduce(({
    DOMContentLoaded,
    onLoad,
  }, { pageTimings }) => ({
    DOMContentLoaded: DOMContentLoaded + pageTimings.onContentLoad,
    onLoad: onLoad + pageTimings.onLoad,
  }), {
    DOMContentLoaded: 0,
    onLoad: 0,
  }));

export const getSummary = (data) => (
  data.reduce((acc, req) => {
    acc.totalTransferredSize += req.transferredSize;
    acc.totalUncompressedSize += req.uncompressedSize;
    return acc;
  }, {
    totalTransferredSize: 0,
    totalUncompressedSize: 0,
    totalRequests: data.size,
  })
);

export const parseRequestPayload = (text) => {
  let parsedJson = text;
  try {
    parsedJson = JSON.stringify(JSON.parse(text), null, 2);
  } catch (err) {
    parsedJson = text;
  }
  return parsedJson;
};
