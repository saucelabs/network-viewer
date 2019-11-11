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
  search: {
    name: 'url',
    value: '',
  },
  filter: {
    name: null,
    value: null,
  },
  notifications: new List(),
});

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_DATA: {
      return state.withMutations((newState) => {
        const sort = state.get('sort');
        const { data, totalNetworkTime } = prepareViewerData(payload);
        const sortedData = new List(sortBy(data, sort.key, sort.isAcs));
        newState
          .set('data', sortedData)
          .set('actualData', sortedData)
          .set('totalNetworkTime', totalNetworkTime);
      });
    }
    case types.UPDATE_SEARCH: {
      return state.withMutations((newState) => {
        newState
          .set('search', payload)
          .set('data', filterData({
            data: state.get('actualData'),
            filter: state.get('filter'),
            search: payload,
          }));
      });
    }
    case types.UPDATE_FILTER: {
      return state.withMutations((newState) => {
        newState
          .set('filter', payload)
          .set('data', filterData({
            data: state.get('actualData'),
            filter: payload,
            search: state.get('search'),
          }));
      });
    }
    case types.UPDATE_SORT: {
      return state.withMutations((newState) => {
        newState
          .set('sort', payload)
          .set('data', sortBy(state.get('data'), payload.key, payload.isAcs));
      });
    }
    case types.ADD_NOTIFICATION: {
      const existingNotification = state.get('notifications');
      const lastId = existingNotification.size
        ? existingNotification.last().id : 0;
      return state.setIn(['notifications', existingNotification.size], {
        id: lastId + 1,
        ...payload,
      });
    }
    case types.DISMISS_NOTIFICATION: {
      const existingNotification = state.get('notifications');
      const index = existingNotification.findIndex(({ id }) => id === payload);
      return state.set('notifications', existingNotification.delete(index));
    }
    default:
      return state;
  }
};

export { initialState, reducer };
export default reducer;
