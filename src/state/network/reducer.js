import { Map, List } from 'immutable';

import * as types from './types';
import { filterData, sortBy, prepareViewerData } from '../../utils';

const initialState = new Map({
  data: new List(),
  actualData: new List(),
  totalNetworkTime: null,
  sort: {
    key: 'startedDateTime',
    isAcs: true,
  },
  filter: {
    search: '',
    key: null,
    value: null,
  },
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_DATA: {
      return state.withMutations((newState) => {
        const sort = state.get('sort');
        const { data, totalNetworkTime } = prepareViewerData(payload);
        const sortedData = new List(sortBy(data, sort.key, sort.isAcs));

        return newState
          .set('data', sortedData)
          .set('actualData', sortedData)
          .set('totalNetworkTime', totalNetworkTime);
      });
    }

    case types.UPDATE_SEARCH: {
      return state.withMutations((newState) => {
        const existingFilter = state.get('filter');

        const filter = {
          ...existingFilter,
          search: payload,
        };
        newState
          .set('filter', filter)
          .set('data', filterData(state.get('actualData'), filter));
      });
    }

    case types.UPDATE_FILTER: {
      return state.withMutations((newState) => {
        const existingFilter = state.get('filter');
        const filter = {
          ...existingFilter,
          ...payload,
        };
        newState
          .set('filter', filter)
          .set('data', filterData(state.get('actualData'), filter));
      });
    }

    case types.UPDATE_SORT: {
      return state.withMutations((newState) => {
        newState
          .set('sort', payload)
          .set('data', sortBy(state.get('data'), payload.key, payload.isAcs));
      });
    }

    default:
      return state;
  }
};

export { initialState, reducer };
export default reducer;
