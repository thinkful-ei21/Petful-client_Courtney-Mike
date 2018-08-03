import { API_BASE_URL } from "../src/config";

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error: 'Cat could not be found'
});


export const DELETE_CAT_REQUEST = 'DELETE_CAT_REQUEST';
export const deleteCatRequest = () => ({
  type: DELETE_CAT_REQUEST
});

export const DELETE_CAT_SUCCESS = 'DELETE_CAT_SUCCESS';
export const deleteCatSuccess = cat => ({
  type: DELETE_CAT_SUCCESS,
  cat
});

export const DELETE_CAT_ERROR = 'DELETE_CAT_ERROR';
export const deleteCatError = error => ({
  type: DELETE_CAT_ERROR,
  error: 'Cat could not be found'
});

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch('http://localhost:8080/api/cat/')
    .then(res => res.json())
    .then(data => dispatch(fetchCatSuccess(data)))
    .catch(err => dispatch(fetchCatError(err)))
}


export const adoptCat = () => dispatch => {
  dispatch(deleteCatRequest())
  fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res;
  })
  .then(res => res.sendStatus(204))
  .then(data => dispatch(deleteCatSuccess(data)))
  .then(dispatch(fetchCat()))
  .catch(err => dispatch(deleteCatError(err)))
}