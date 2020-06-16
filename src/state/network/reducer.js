import { Map, List } from 'immutable';

import { filterData, sortBy, prepareViewerData, calculateTimings, getSummary } from './../../utils';
import * as types from './types';

const initialState = new Map({
  data: new List(),
  actualData: new List(),
  totalNetworkTime: null,
  dataSummary: new Map(),
  sort: {
    key: 'startedDateTime',
    isAcs: true,
  },
  search: {
    name: 'url',
    value: '',
  },
  filter: {
    name: null,
    value: null,
  },
  errorFilter: false,
  error: null,
  loading: false,
  scrollToIndex: null,
  selectedReqIndex: null,
  showReqDetail: false,
  reqDetail: null,
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_DATA: {
      return state.withMutations((newState) => {
        const sort = state.get('sort');
        const {
          data,
          totalNetworkTime,
          totalRequests,
          totalTransferredSize,
          totalUncompressedSize,
          finishTime,
        } = prepareViewerData(payload.entries);
        const sortedData = new List(sortBy(data, sort.key, sort.isAcs));
        newState
          .set('error', null)
          .set('data', sortedData)
          .set('actualData', sortedData)
          .set('totalNetworkTime', totalNetworkTime)
          .set('dataSummary', new Map({
            totalRequests,
            totalTransferredSize,
            totalUncompressedSize,
            finishTime,
            timings: calculateTimings(payload.pages),
            finish: finishTime,
          }));
      });
    }
    case types.UPDATE_SEARCH: {
      return state.withMutations((newState) => {
        const data = filterData({
          data: state.get('actualData'),
          filter: state.get('filter'),
          search: payload,
          errorFilter: state.get('errorFilter'),
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
    case types.UPDATE_FILTER: {
      return state.withMutations((newState) => {
        const data = filterData({
          data: state.get('actualData'),
          filter: payload,
          search: state.get('search'),
          errorFilter: state.get('errorFilter'),
        });
        const summary = getSummary(data);
        newState
          .set('filter', payload)
          .set('data', data)
          .setIn(['dataSummary', 'totalRequests'], summary.totalRequests)
          .setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize)
          .setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
      });
    }
    case types.UPDATE_ERROR_FILTER: {
      return state.withMutations((newState) => {
        const data = filterData({
          data: state.get('actualData'),
          filter: state.get('filter'),
          search: state.get('search'),
          errorFilter: payload,
        });
        const summary = getSummary(data);
        newState
          .set('errorFilter', payload)
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
          .set('data', sortBy(state.get('data'), payload.key, payload.isAcs));
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
    case types.RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export { initialState, reducer };
export default reducer;
