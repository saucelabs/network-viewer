import { Map, List } from 'immutable';

import * as types from './../../../state/network/types';
import { reducer, initialState } from './../../../state/network/reducer';
import networkDataMock from './../../__fixtures__/network.json';
import preparedMockData from './../../__fixtures__/preparedData';

describe('network reducer', () => {
  let state;

  it('UPDATE_DATA', () => {
    state = reducer(initialState, {
      type: types.UPDATE_DATA,
      payload: networkDataMock.log.entries,
    });
    expect(state.get('data').toJS()).toMatchSnapshot();
    expect(state.get('actualData').size).toMatchSnapshot();
  });

  it('UPDATE_SEARCH', () => {
    const newState = initialState.merge(new Map({
      actualData: preparedMockData,
    }));

    state = reducer(newState, {
      type: types.UPDATE_SEARCH,
      payload: {
        key: 'url',
        value: 'e96c15f68c68',
      },
    });
    expect(state.get('data').toJS()).toMatchSnapshot();
    expect(state.get('search')).toMatchSnapshot();
  });

  it('UPDATE_FILTER', () => {
    const newState = initialState.merge(new Map({
      actualData: preparedMockData,
    }));

    state = reducer(newState, {
      type: types.UPDATE_FILTER,
      payload: {
        key: 'type',
        value: 'html',
      },
    });
    expect(state.get('data').toJS()).toMatchSnapshot();
    expect(state.get('filter')).toMatchSnapshot();
  });

  it('UPDATE_SORT', () => {
    const newState = initialState.merge(new Map({
      data: preparedMockData,
    }));

    state = reducer(newState, {
      type: types.UPDATE_SORT,
      payload: {
        key: 'size',
        isAcs: true,
      },
    });
    expect(state.get('data').toJS()).toMatchSnapshot();
    expect(state.get('sort')).toMatchSnapshot();
  });

  it('ADD_NOTIFICATION', () => {
    const newState = initialState;

    state = reducer(newState, {
      type: types.ADD_NOTIFICATION,
      payload: {
        type: 'danger',
        title: 'Error notification',
      },
    });

    expect(state.get('notifications').toJS()).toMatchSnapshot();
  });

  it('DISMISS_NOTIFICATION', () => {
    const newState = initialState.merge(new Map({
      notifications: new List([{
        id: 1,
        type: 'danger',
      }]),
    }));

    state = reducer(newState, {
      type: types.DISMISS_NOTIFICATION,
      payload: 1,
    });

    expect(state.get('notifications').toJS()).toMatchSnapshot();
  });
});
