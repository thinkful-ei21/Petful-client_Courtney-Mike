import { combineReducers } from 'redux';
import catReducer from './cat';
import dogReducer from './dog';

const rootReducer = combineReducers({
  cat: catReducer,
  dog: dogReducer
})

export default rootReducer;
