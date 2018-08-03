import {
  FETCH_CAT_REQUEST,
  FETCH_CAT_SUCCESS,
  FETCH_CAT_ERROR,
  DELETE_CAT_REQUEST,
  DELETE_CAT_SUCCESS,
  DELETE_CAT_ERROR,
} from '../actions/cat';

const initialState = {
  cat: {},
  loading: false,
  error: null
}

const catReducer = (state=initialState, action) => {
  if (action.type === FETCH_CAT_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  else if (action.type === FETCH_CAT_SUCCESS) {
    return {
      ...state,
      cat: action.cat,
      loading: false
    };
  }
  else if (action.type === FETCH_CAT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  else if (action.type === DELETE_CAT_REQUEST) {
    return {
      ...state,
      loading: true,
      error: null
    };
  }
  else if (action.type === DELETE_CAT_SUCCESS) {
    return {
      ...state,
      cat: action.cat,
      loading: false
    };
  }
  else if (action.type === DELETE_CAT_ERROR) {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }

  return state;
}

export default catReducer;
