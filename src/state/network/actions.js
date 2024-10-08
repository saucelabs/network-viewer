import axios from 'axios';

import * as types from './types';

export const updateData = (dispatch) => (payload) => dispatch({
  type: types.UPDATE_DATA,
  payload,
});

export const updateSearch = (dispatch) => (payload) => dispatch({
  type: types.UPDATE_SEARCH,
  payload,
});

export const updateSort = (dispatch) => (payload) => dispatch({
  type: types.UPDATE_SORT,
  payload,
});

export const updateStatusFilter = (dispatch) => (payload) => dispatch({
  type: types.UPDATE_STATUS_FILTER,
  payload,
});

export const updateTypeFilter = (dispatch) => (payload) => dispatch({
  type: types.UPDATE_TYPE_FILTER,
  payload,
});

export const fetchFileRequest = (dispatch) => (payload) => dispatch({
  type: types.FETCH_FILE.REQUEST,
  payload,
});

export const fetchFileSuccess = (dispatch) => (payload) => dispatch({
  type: types.FETCH_FILE.SUCCESS,
  payload,
});

export const fetchFileFailure = (dispatch) => (payload) => dispatch({
  type: types.FETCH_FILE.FAILURE,
  payload,
});

export const updateErrorMessage = (dispatch) => (payload) => dispatch({
  type: types.UPDATE_ERROR_MESSAGE,
  payload,
});

export const updateScrollToIndex = (dispatch) => (payload) => dispatch({
  type: types.UPDATE_SCROLL_TO_INDEX,
  payload,
});

export const selectRequest = (dispatch) => (payload) => dispatch({
  type: types.SELECT_REQUEST,
  payload,
});

export const setTableHeaderWidth = (dispatch) => (payload) => dispatch({
  type: types.SET_TABLE_HEADER_WIDTH,
  payload,
});

export const resetState = (dispatch) => (payload) => dispatch({
  type: types.RESET,
  payload,
});

export const fetchFile = (dispatch) => (file, options = { withCredentials: true }) => {
  fetchFileRequest(dispatch)();
  axios.get(file, options)
    .then(({ data }) => {
      if (data && data.log) {
        updateData(dispatch)(data);
      }
      fetchFileSuccess(dispatch)();
    })
    .catch((error) => fetchFileFailure(dispatch)({
      title: 'Error while fetching file',
      description: error.message,
    }));
};
