import { API_BASE_URL } from "../config";

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error: 'Dog could not be found'
});

export const DELETE_DOG_REQUEST = 'DELETE_DOG_REQUEST';
export const deleteDogRequest = () => ({
  type: DELETE_DOG_REQUEST
});

export const DELETE_DOG_SUCCESS = 'DELETE_DOG_SUCCESS';
export const deleteDogSuccess = dog => ({
  type: DELETE_DOG_SUCCESS,
  dog
});

export const DELETE_DOG_ERROR = 'DELETE_DOG_ERROR';
export const deleteDogError = error => ({
  type: DELETE_DOG_ERROR,
  error: 'Dog could not be found'
});

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  fetch('http://localhost:8080/api/dog/')
    .then(res => res.json())
    .then(data => dispatch(fetchDogSuccess(data)))
    .catch(err => dispatch(fetchDogError(err)))
}

export const adoptDog = () => dispatch => {
  dispatch(deleteDogRequest())
  fetch(`${API_BASE_URL}/api/dog`, {
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
  .then(data => dispatch(deleteDogSuccess(data)))
  .then(res => dispatch(fetchDog()))
  .catch(err => dispatch(deleteDogError(err)))
}
