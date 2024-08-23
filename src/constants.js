export const VIEWER_FIELDS = Object.freeze({
  file: Object.freeze({
    key: 'filename',
    name: 'Path',
  }),
  domain: Object.freeze({
    key: 'domain',
    name: 'Domain',
  }),
  status: Object.freeze({
    key: 'status',
    name: 'Status',
  }),
  method: Object.freeze({
    key: 'method',
    name: 'Method',
  }),
  type: Object.freeze({
    key: 'type',
    name: 'Type',
  }),
  size: Object.freeze({
    key: 'size',
    name: 'Size',
  }),
  time: Object.freeze({
    key: 'time',
    name: 'Time',
  }),
  waterfall: Object.freeze({
    key: 'waterfall',
    name: 'Waterfall',
  }),
});

export const VIEWER_FIELDS_HIDE_WATERFALL = Object.freeze({
  file: Object.freeze({
    key: 'filename',
    name: 'Path',
  }),
  domain: Object.freeze({
    key: 'domain',
    name: 'Domain',
  }),
  status: Object.freeze({
    key: 'status',
    name: 'Status',
  }),
  method: Object.freeze({
    key: 'method',
    name: 'Method',
  }),
  type: Object.freeze({
    key: 'type',
    name: 'Type',
  }),
  size: Object.freeze({
    key: 'size',
    name: 'Size',
  }),
  time: Object.freeze({
    key: 'time',
    name: 'Time',
  }),
});

export const VIEWER_FIELD_FILE = {
  file: Object.freeze({
    key: 'filename',
    name: 'Path',
  }),
};

export const FILTER_OPTION = Object.freeze({
  STATUS: 'STATUS',
  TYPE: 'TYPE',
  URL: 'URL',
  BODY: 'BODY',
});

export const DEFAULT_FILTER = {
  name: null,
  value: null,
};

export const TYPE_FILTERS = [
  {
    name: 'All',
    filterBy: DEFAULT_FILTER,
  },
  {
    name: 'XHR',
    filterBy: {
      name: 'type',
      value: ['xhr', 'XHR', 'fetch'],
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
];

export const DEFAULT_STATUS_FILTER = {
  name: 'All',
  value: null,
};
export const STATUS_FILTERS = [
  DEFAULT_STATUS_FILTER,
  {
    name: '1xx',
    value: '1',
  },
  {
    name: '2xx',
    value: '2',
  },
  {
    name: '3xx',
    value: '3',
  },
  {
    name: '4xx',
    value: '4',
  },
  {
    name: '5xx',
    value: '5',
  },
];

export const FETCH_FILE_LOAD_TEXT = 'Please wait, Fetching file is in progress.';

export const TIMINGS = {
  queueing: {
    dataKey: ['_blocked_queueing', '_queued'],
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
  height: '15',
  viewBox: '0 0 200 20',
  version: '1.1',
  preserveAspectRatio: 'xMinYMin meet',
};

export const TIME_CHART_DEFAULT_PROPS = {
  height: 30,
  y: 0,
};

export const ROW_ID_PREFIX = 'network-viewer-table-row-';

export const GENERAL_HEADERS = Object.freeze({
  url: Object.freeze({
    key: 'url',
    name: 'Request URL',
  }),
  method: Object.freeze({
    key: 'method',
    name: 'Request Method',
  }),
  status: Object.freeze({
    key: 'status',
    name: 'Status Code',
  }),
  serverIPAddress: Object.freeze({
    key: 'serverIPAddress',
    name: 'Remote Address',
  }),
});

export const SECTION_TITLES = Object.freeze({
  general: Object.freeze({
    key: 'general',
    name: 'General',
  }),
  requestHeaders: Object.freeze({
    key: 'requestHeaders',
    name: 'Request Headers',
  }),
  responseHeaders: Object.freeze({
    key: 'responseHeaders',
    name: 'Response Headers',
  }),
  requestPayload: Object.freeze({
    key: 'requestPayload',
    name: 'Request Payload',
  }),
  queryString: Object.freeze({
    key: 'queryString',
    name: 'Query String Parameters',
  }),
  formData: Object.freeze({
    key: 'formData',
    name: 'Form Data',
  }),
});

export const MAX_COLOR_CONTENT_SIZE = 100000; // 100kB
export const TIMELINE_DATA_POINT_HEIGHT = 2;
export const NETWORK_VIEWER_DEFAULT_OPTIONS = {
  enableAutoScroll: false,
  showExportHar: false,
  showImportHar: true,
  showPauseResume: false,
  showReset: true,
  showTimeline: false,
  showWaterfall: true,
};

export const PAYLOAD_CAPTIONS = Object.freeze({
  encode: Object.freeze({
    true: 'URL encoded',
    false: 'decoded',
  }),
  parse: Object.freeze({
    true: 'source',
    false: 'parsed',
  }),
});

export const EMPTY_NETWORK_HAR = Object.freeze({
  log: {
    version: '',
    creator: {
      name: '',
      version: '',
    },
    entries: [],
    pages: [],
  },
});

export const TABLE_HEADER_HEIGHT = 32;
export const TABLE_ENTRY_HEIGHT = 24;
