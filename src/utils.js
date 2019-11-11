/* eslint no-underscore-dangle: 0 */

export const getUrlInfo = (url) => {
  const urlInfo = new URL(url);
  const pathSplit = urlInfo.pathname.split('/');
  const fileName = pathSplit[pathSplit.length - 1].trim()
    ? pathSplit[pathSplit.length - 1] : pathSplit[pathSplit.length - 2];

  return {
    domain: urlInfo.host,
    filename: fileName + urlInfo.search,
    url: urlInfo.href,
  };
};

export const parseSize = ({ headers, content }) => {
  if (content && content.size) {
    return Number((content.size / 1024).toFixed(2));
  }

  const contentInfo = headers.find(({ name }) => ['content-length', 'Content-Length'].includes(name));
  if (!contentInfo) {
    return 0;
  }

  return Number((contentInfo.value / 1024).toFixed(2));
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
    return JSON.stringify(JSON.parse(text));
  }

  return text;
};

export const prepareViewerData = (entries) => {
  const firstEntryTime = entries[0].startedDateTime;
  const lastEntryTime = entries[entries.length - 1].startedDateTime;
  const data = entries
    .filter(entry => entry.response)
    .map((entry, index) => ({
      index,
      status: entry.response.status,
      method: entry.request.method,
      size: parseSize(entry.response),
      startedDateTime: entry.startedDateTime,
      type: entry._resourceType || getContentType(entry.response.headers),
      timings: getTimings(entry, firstEntryTime),
      body: getContent(entry.response.content),
      ...getUrlInfo(entry.request.url),
    }));

  const totalNetworkTime = new Date(lastEntryTime).getTime()
    - new Date(firstEntryTime).getTime()
    + data[data.length - 1].timings.receive;
  return {
    totalNetworkTime,
    data,
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

export const filterData = ({
  data, filter, search,
}) => {
  const trimmedSearch = search.value && search.value.trim();

  return !trimmedSearch && !filter.name
    ? data
    : data.filter((info) => {
      const isSearchMatched = trimmedSearch
        ? info[search.name] && info[search.name].includes(trimmedSearch) : true;
      const isFilterMatched = filter.name ? info[filter.name] === filter.value : true;
      return isSearchMatched && isFilterMatched;
    });
};

export const actionsWrapper = (actions = {}) => (dispatch, state) => Object.keys(actions)
  .reduce((modifiedActions, type) => ({
    ...modifiedActions,
    [type]: actions[type](dispatch, state),
  }), {});
