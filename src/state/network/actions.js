import {
  UPDATE_DATA, UPDATE_SEARCH, UPDATE_SORT, UPDATE_FILTER,
  ADD_NOTIFICATION, DISMISS_NOTIFICATION,
} from './types';

export const updateData = (dispatch) => (payload) => dispatch({
  type: UPDATE_DATA,
  payload,
});

export const updateSearch = (dispatch) => (payload) => dispatch({
  type: UPDATE_SEARCH,
  payload,
});

export const updateSort = (dispatch) => (payload) => dispatch({
  type: UPDATE_SORT,
  payload,
});

export const updateFilter = (dispatch) => (payload) => dispatch({
  type: UPDATE_FILTER,
  payload,
});

export const errorNotification = (dispatch) => (payload) => dispatch({
  type: ADD_NOTIFICATION,
  payload: {
    type: 'danger',
    ...payload,
  },
});

export const warningNotification = (dispatch) => (payload) => dispatch({
  type: ADD_NOTIFICATION,
  payload: {
    type: 'warning',
    ...payload,
  },
});

export const successNotification = (dispatch) => (payload) => dispatch({
  type: ADD_NOTIFICATION,
  payload: {
    type: 'success',
    ...payload,
  },
});

export const infoNotification = (dispatch) => (payload) => dispatch({
  type: ADD_NOTIFICATION,
  payload: {
    type: 'info',
    ...payload,
  },
});

export const dismissNotification = (dispatch) => (payload) => dispatch({
  type: DISMISS_NOTIFICATION,
  payload,
});
