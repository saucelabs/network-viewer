import {
  UPDATE_DATA, UPDATE_SEARCH, UPDATE_SORT, UPDATE_FILTER,
  ADD_NOTIFICATION, DISMISS_NOTIFICATION, FETCH_FILE,
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

export const fetchFileRequest = (dispatch) => (payload) => dispatch({
  type: FETCH_FILE.REQUEST, payload,
});

export const fetchFileSuccess = (dispatch) => (payload) => dispatch({
  type: FETCH_FILE.SUCCESS, payload,
});

export const fetchFileFailure = (dispatch) => (payload) => dispatch({
  type: FETCH_FILE.FAILURE, payload,
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
