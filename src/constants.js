export const VIEWER_FIELDS = [
  {
    key: 'status',
    name: 'Status',
  },
  {
    key: 'method',
    name: 'Method',
  },
  {
    key: 'domain',
    name: 'Domain',
  },
  {
    key: 'filename',
    name: 'File',
  },
  {
    key: 'type',
    name: 'Type',
  },
  {
    key: 'size',
    name: 'Size',
    unit: 'KB',
  },
  {
    key: 'time',
    name: 'Time',
  },
];

export const DEFAULT_FILTER = {
  name: null,
  value: null,
};

export const FILTERS = [
  {
    name: 'All',
    filterBy: DEFAULT_FILTER,
  },
  {
    name: 'XHR',
    filterBy: {
      name: 'type',
      value: ['xhr', 'XHR'],
    },
  },
  {
    name: 'JS',
    filterBy: {
      name: 'type',
      value: ['script', 'javascript', 'x-javascript', 'json'],
    },
  },
  {
    name: 'CSS',
    filterBy: {
      name: 'type',
      value: ['stylesheet', 'css'],
    },
  },
  {
    name: 'Img',
    filterBy: {
      name: 'type',
      value: ['image', 'png', 'jpeg', 'svg+xml', 'gif'],
    },
  },
  {
    name: 'Media',
    filterBy: {
      name: 'type',
      value: ['media'],
    },
  },
  {
    name: 'Font',
    filterBy: {
      name: 'type',
      value: ['font', 'woff2'],
    },
  },
  {
    name: 'Doc',
    filterBy: {
      name: 'type',
      value: ['document', 'html'],
    },
  },
  {
    name: 'WS',
    filterBy: {
      name: 'type',
      value: ['websocket'],
    },
  },
  {
    name: 'Manifest',
    filterBy: {
      name: 'type',
      value: ['manifest.json'],
    },
  },
  {
    name: 'Error',
    filterBy: {
      name: 'error',
      value: ['error'],
    },
  },
];

export const FETCH_FILE_LOAD_TEXT = 'Please wait, Fetching file is in progress.';

export const TIMINGS = {
  queueing: {
    dataKey: '_blocked_queueing',
    fill: '#ccc',
    name: 'Queueing',
  },
  blocked: {
    dataKey: 'blocked',
    fill: '#A1000C',
    name: 'Stalled',
  },
  dns: {
    dataKey: 'dns',
    fill: '#DCC9E5',
    name: 'DNS Lookup',
  },
  ssl: {
    dataKey: 'ssl',
    fill: '#E78057',
    name: 'SSL',
  },
  connect: {
    dataKey: 'connect',
    fill: '#DB8553',
    name: 'Initial Connection',
  },
  send: {
    dataKey: 'send',
    fill: '#3C96C4',
    name: 'Request Sent',
  },
  wait: {
    dataKey: 'wait',
    fill: '#7CA0BF',
    name: 'Waiting (TTFB)',
  },
  receive: {
    dataKey: 'receive',
    fill: '#65B955',
    name: 'Content Downloaded',
  },
};

export const TIME_CHART_SVG_PROPS = {
  width: '100%',
  height: '20',
  viewBox: '0 0 250 20',
  version: '1.1',
};

export const TIME_CHART_DEFAULT_PROPS = {
  height: 16,
  y: 3.5,
};

export const ROW_ID_PREFIX = 'network-viewer-table-row-';
