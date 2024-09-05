import { Map, List } from 'immutable';

import { filterData, sortBy, prepareViewerData, calculateTimings, getSummary } from './../../utils';
import * as types from './types';
import { DEFAULT_STATUS_FILTER, EMPTY_NETWORK_HAR } from '../../constants';

const initialState = new Map({
  rawData: EMPTY_NETWORK_HAR,
  data: new List(),
  actualData: new List(),
  totalNetworkTime: null,
  dataSummary: new Map(),
  sort: {
    key: 'startedDateTime',
    isAsc: true,
  },
  search: {
    name: 'URL',
    value: '',
  },
  statusFilter: DEFAULT_STATUS_FILTER,
  typeFilter: {
    name: null,
    value: null,
  },
  error: null,
  loading: false,
  scrollToIndex: null,
  selectedReqIndex: null,
  showReqDetail: false,
  reqDetail: null,
  tableHeaderWidth: '100%',
  numberOfNewEntries: 0,
});

const reducer = (state = initialState, {
  type,
  payload,
}) => {
  switch (type) {
    case types.UPDATE_DATA: {
      return state.withMutations((newState) => {
        const {
          data,
          totalNetworkTime,
          totalRequests,
          totalTransferredSize,
          totalUncompressedSize,
          finishTime,
        } = prepareViewerData(payload.log.entries);

        const sort = state.get('sort');
        const sortedData = new List(sortBy(data, sort.key, sort.isAsc));

        const filteredData = filterData({
          data: sortedData,
          statusFilter: state.get('statusFilter'),
          typeFilter: state.get('typeFilter'),
          search: state.get('search'),
        });

        const prevData = state.get('data');
        const numberOfNewEntries = filteredData.size - prevData.size;

        newState
          .set('error', null)
          .set('rawData', payload)
          .set('data', filteredData)
          .set('actualData', sortedData)
          .set('numberOfNewEntries', numberOfNewEntries)
          .set('totalNetworkTime', totalNetworkTime)
          .set('dataSummary', new Map({
            totalRequests,
            totalTransferredSize,
            totalUncompressedSize,
            finishTime,
            timings: calculateTimings(payload.log.pages),
            finish: finishTime,
          }));
      });
    }
    case types.UPDATE_SEARCH: {
      return state.withMutations((newState) => {
        const data = filterData({
          data: state.get('actualData'),
          statusFilter: state.get('statusFilter'),
          typeFilter: state.get('typeFilter'),
          search: payload,
        });
        const summary = getSummary(data);
        newState
          .set('search', payload)
          .set('data', data)
          .setIn(['dataSummary', 'totalRequests'], summary.totalRequests)
          .setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize)
          .setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
      });
    }
    case types.UPDATE_STATUS_FILTER: {
      return state.withMutations((newState) => {
        const data = filterData({
          data: state.get('actualData'),
          statusFilter: payload,
          typeFilter: state.get('typeFilter'),
          search: state.get('search'),
        });
        const summary = getSummary(data);
        newState
          .set('statusFilter', payload)
          .set('data', data)
          .setIn(['dataSummary', 'totalRequests'], summary.totalRequests)
          .setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize)
          .setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
      });
    }
    case types.UPDATE_TYPE_FILTER: {
      return state.withMutations((newState) => {
        const data = filterData({
          data: state.get('actualData'),
          statusFilter: state.get('statusFilter'),
          typeFilter: payload,
          search: state.get('search'),
        });
        const summary = getSummary(data);
        newState
          .set('typeFilter', payload)
          .set('data', data)
          .setIn(['dataSummary', 'totalRequests'], summary.totalRequests)
          .setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize)
          .setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
      });
    }
    case types.UPDATE_SORT: {
      return state.withMutations((newState) => {
        newState
          .set('sort', payload)
          .set('data', sortBy(state.get('data'), payload.key, payload.isAsc));
      });
    }
    case types.FETCH_FILE.REQUEST: {
      return state.withMutations((newState) => {
        newState
          .set('error', null)
          .set('loading', true);
      });
    }
    case types.FETCH_FILE.SUCCESS: {
      return state.withMutations((newState) => {
        newState
          .set('error', null)
          .set('loading', false);
      });
    }
    case types.FETCH_FILE.FAILURE:
    case types.UPDATE_ERROR_MESSAGE: {
      return state.withMutations((newState) => {
        newState
          .set('error', payload)
          .set('loading', false);
      });
    }
    case types.UPDATE_SCROLL_TO_INDEX: {
      return state.withMutations((newState) => {
        newState
          .set('selectedReqIndex', payload ? payload.index : null)
          .set('reqDetail', payload);
      });
    }
    case types.SELECT_REQUEST: {
      return state.withMutations((newState) => {
        newState
          .set('selectedReqIndex', payload ? payload.index : null)
          .set('reqDetail', payload)
          .set('showReqDetail', !!payload);
      });
    }
    case types.SET_TABLE_HEADER_WIDTH: {
      return state.withMutations((newState) => {
        newState.set('tableHeaderWidth', `${payload}px`);
      });
    }
    case types.RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export { initialState, reducer };
export default reducer;
