import {
  UPDATE_DATA, UPDATE_SEARCH, UPDATE_SORT, UPDATE_FILTER,
  FETCH_FILE, UPDATE_ERROR_MESSAGE, UPDATE_SCROLL_TO_INDEX,
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

export const fetchFileRequest = (dispatch) => (payload) => dispatch({
  type: FETCH_FILE.REQUEST, payload,
});

export const fetchFileSuccess = (dispatch) => (payload) => dispatch({
  type: FETCH_FILE.SUCCESS, payload,
});

export const fetchFileFailure = (dispatch) => (payload) => dispatch({
  type: FETCH_FILE.FAILURE, payload,
});

export const updateErrorMessage = (dispatch) => (payload) => dispatch({
  type: UPDATE_ERROR_MESSAGE, payload,
});

export const updateScrollToIndex = (dispatch) => (payload) => dispatch({
  type: UPDATE_SCROLL_TO_INDEX, payload,
});

export const fetchFile = (dispatch) => (file, fetchOptions) => {
  fetchFileRequest(dispatch)();
  fetch(file, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data && data.log && data.log.entries) {
        updateData(dispatch)(data.log.entries);
      }
      fetchFileSuccess(dispatch)();
    })
    .catch((error) => fetchFileFailure(dispatch)({
      title: 'Error while fetching file',
      description: error.message,
    }));
};
