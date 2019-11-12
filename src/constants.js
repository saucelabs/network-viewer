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
  key: null,
  value: null,
};

export const FILTERS = [
  {
    name: 'All',
    filterBy: DEFAULT_FILTER,
  },
  {
    name: 'HTML',
    filterBy: {
      key: 'type',
      value: 'html',
    },
  },
  {
    name: 'CSS',
    filterBy: {
      key: 'type',
      value: 'css',
    },
  },
  {
    name: 'JS',
    filterBy: {
      key: 'type',
      value: 'javascript',
    },
  },
  {
    name: 'XHR',
    filterBy: {
      key: 'type',
      value: 'xhr',
    },
  },
  {
    name: 'Fonts',
    filterBy: {
      key: 'type',
      value: 'fonts',
    },
  },
  {
    name: 'Images',
    filterBy: {
      key: 'type',
      value: 'images',
    },
  },
];
