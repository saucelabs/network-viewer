import {
  UPDATE_DATA, UPDATE_SEARCH, UPDATE_SORT, UPDATE_FILTER,
} from './types';

export const updateData = dispatch => payload => dispatch({
  type: UPDATE_DATA,
  payload,
});

export const updateSearch = dispatch => payload => dispatch({
  type: UPDATE_SEARCH,
  payload,
});

export const updateSort = dispatch => payload => dispatch({
  type: UPDATE_SORT,
  payload,
});

export const updateFilter = dispatch => payload => dispatch({
  type: UPDATE_FILTER,
  payload,
});
