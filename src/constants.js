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
      value: 'xhr',
    },
  },
  {
    name: 'JS',
    filterBy: {
      name: 'type',
      value: 'script',
    },
  },
  {
    name: 'CSS',
    filterBy: {
      name: 'type',
      value: 'stylesheet',
    },
  },
  {
    name: 'Img',
    filterBy: {
      name: 'type',
      value: 'image',
    },
  },
  {
    name: 'Media',
    filterBy: {
      name: 'type',
      value: 'media',
    },
  },
  {
    name: 'Font',
    filterBy: {
      name: 'type',
      value: 'font',
    },
  },
  {
    name: 'Doc',
    filterBy: {
      name: 'type',
      value: 'document',
    },
  },
  {
    name: 'WS',
    filterBy: {
      name: 'type',
      value: 'websocket',
    },
  },
  {
    name: 'Manifest',
    filterBy: {
      name: 'type',
      value: 'manifest',
    },
  },
];
