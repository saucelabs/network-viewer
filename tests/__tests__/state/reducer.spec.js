import { Map } from 'immutable';

import * as types from './../../../src/state/network/types';
import { reducer, initialState } from './../../../src/state/network/reducer';
import networkDataMock from './../../__fixtures__/network.json';
import preparedMockData from './../../__fixtures__/preparedData';

describe('network reducer', () => {
  let state;

  it('UPDATE_DATA', () => {
    state = reducer(initialState, {
      type: types.UPDATE_DATA,
      payload: {
        entries: networkDataMock.log.entries,
        pages: networkDataMock.log.pages,
      },
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
    expect(state.get('dataSummary')).toMatchSnapshot();
  });

  it('UPDATE_FILTER', () => {
    const newState = initialState.merge(new Map({
      actualData: preparedMockData,
    }));

    state = reducer(newState, {
      type: types.UPDATE_FILTER,
      payload: {
        key: 'type',
        value: ['html'],
      },
    });
    expect(state.get('data').toJS()).toMatchSnapshot();
    expect(state.get('filter')).toMatchSnapshot();
    expect(state.get('dataSummary')).toMatchSnapshot();
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

  it('SELECT_REQUEST', () => {
    const newState = initialState.merge(new Map({
      data: preparedMockData,
    }));

    state = reducer(newState, {
      type: types.SELECT_REQUEST,
      payload: preparedMockData.get(0),
    });
    expect(state.get('selectedReqIndex')).toBe(0);
    expect(state.get('reqDetail')).toMatchSnapshot();
  });
});
