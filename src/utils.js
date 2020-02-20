import { TIMINGS, TIMELINE_DATA_POINT_HEIGHT } from './constants';

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
};

export const parseSize = ({ bodySize, _transferSize, headers, content }) => {
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

export const getContentType = (headers) => {
  const contentInfo = headers.find(({ name }) => ['content-type', 'Content-Type'].includes(name));
  if (!contentInfo) {
    return '';
  }
  const type = contentInfo.value.split(';')[0].split('/');
  return type.length > 1 ? type[1] : type[0];
};

export const getTimings = ({ startedDateTime, timings }, firstEntryTime) => ({
  ...timings,
  startTime: new Date(startedDateTime).getTime() - new Date(firstEntryTime).getTime(),
});

export const getContent = ({ mimeType, text }) => {
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
  const { bodySize, _transferSize } = response;
  if (_transferSize > -1) {
    return _transferSize;
  }

  if (bodySize > -1) {
    return bodySize;
  }
  return -1;
};

export const getEntryUncompressedSize = ({ response }) => {
  const { bodySize, _transferSize, content: { size } } = response;
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
    Object.values(timings).reduce((acc, durationInMS) => (
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

export const getHeaders = (entry) => ({
  request: entry.request.headers.sort(sortHeaders),
  response: entry.response.headers.sort(sortHeaders),
  queryString: entry.request.queryString,
  postData: entry.request.postData,
});

export const getTotalTimeOfEntry = ({ startedDateTime, time, timings }) => (
  new Date(startedDateTime).getTime() + time + timings._blocked_queueing
);

export const prepareViewerData = (entries) => {
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
        index,
        status: entry.response.status,
        method: entry.request.method,
        size: parseSize(entry.response),
        startedDateTime: new Date(entry.startedDateTime).getTime(),
        type: entry._resourceType || getContentType(entry.response.headers),
        timings: getTimings(entry, firstEntryTime),
        body: getContent(entry.response.content),
        time: entry.time,
        serverIPAddress: entry.serverIPAddress || ':80',
        headers: getHeaders(entry),
        transferredSize: getEntryTransferredSize(entry),
        uncompressedSize: getEntryUncompressedSize(entry),
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

export const sortBy = (data, key, isAsc = true) => data.sort((prev, next) => {
  if (prev[key] < next[key]) {
    return isAsc ? -1 : 1;
  }
  if (prev[key] > next[key]) {
    return isAsc ? 1 : 1;
  }
  return 0;
});

export const filterCondition = ({ filter, info }) => {
  switch (filter.name) {
    case 'error':
      return info.status >= 400;
    case 'type':
    default:
      return filter.value.includes(info[filter.name]);
  }
};

export const filterData = ({
  data, filter, search,
}) => {
  const trimmedSearch = search.value && search.value.trim();

  return !trimmedSearch && !filter.name ?
    data :
    data.filter((info) => {
      const isSearchMatched = trimmedSearch ?
        info[search.name] && info[search.name].includes(trimmedSearch) : true;
      const isFilterMatched = filter.name ? filterCondition({ filter, info }) : true;
      return isSearchMatched && isFilterMatched;
    });
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
    .filter((key) => !['_blocked_queueing', 'startTime'].includes(key))
    .reduce((acc, key) => acc + data[key], 0);
  return total;
};

export const prepareTooltipData = (data) => ({
  queuedAt: parseTime(data.startTime),
  startedAt: parseTime(data.startTime + data._blocked_queueing),
  totalTime: parseTime(calcTotalTime(data)),
  ...(Object.keys(data).reduce((acc, key) => {
    acc[key] = parseTime(data[key]);
    return acc;
  }, {})
  ),
});

export const getStatusClass = (status) => {
  if (status === 0) {
    return 'pending';
  }
  if (status >= 400) {
    return 'error';
  }
  return 'info';
};

export const formatValue = (key, value, unit) => {
  switch (key) {
    case 'time':
      return value === 0 ? 'Pending' : parseTime(value);
    case 'status':
      return value === 0 ? 'Pending' : value;
    default:
      return !unit ? value : `${value} ${unit}`;
  }
};

export const calcChartAttributes = (data, maxTime, cx, index, cy = null) => {
  const startTimePercent = (data.startTime / maxTime) * 100;
  let previousX = cx || 0;
  let previousWidth = 0;
  const chartAttributes = [];

  Object.keys(TIMINGS).forEach((key) => {
    const timingInfo = TIMINGS[key];
    const value = data[timingInfo.dataKey];
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

export const findIndexByTimeStamp = (data, exactTimestamp) => (
  data.reduce(({ value, index }, { startedDateTime: currentValue, index: currentIndex }) => (
    Math.abs(currentValue - exactTimestamp) < Math.abs(value - exactTimestamp) ?
      { value: currentValue, index: currentIndex } : { value, index }
  ), { value: 0, index: 0 }).index
);

export const calculateTimings = (pages) => (
  pages.reduce(({ DOMContentLoaded, onLoad }, { pageTimings }) => ({
    DOMContentLoaded: DOMContentLoaded + pageTimings.onContentLoad,
    onLoad: onLoad + pageTimings.onLoad,
  }), { DOMContentLoaded: 0, onLoad: 0 }));

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
