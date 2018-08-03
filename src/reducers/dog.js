import {
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS,
  FETCH_DOG_ERROR,
  DELETE_DOG_REQUEST,
  DELETE_DOG_SUCCESS,
  DELETE_DOG_ERROR,
} from '../actions/dog';

const initialState = {
  dog: [],
  loading: false,
  error: null
}

const dogReducer = (state=initialState, action) => {
  if (action.type === FETCH_DOG_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  else if (action.type === FETCH_DOG_SUCCESS) {
    return {
      ...state,
      dog: action.dog,
      loading: false
    };
  }
  else if (action.type === FETCH_DOG_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  else if (action.type === DELETE_DOG_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  else if (action.type === DELETE_DOG_SUCCESS) {
    return {
      ...state,
      dog: action.dog,
      loading: false
    };
  }
  else if (action.type === DELETE_DOG_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }

  return state;
}

export default dogReducer;
