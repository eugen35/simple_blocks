import { combineReducers } from 'redux';
import todos from './todos';
import blocks from './blocks';

const rootReducer = combineReducers({
  todos,
  blocks
});

export default rootReducer;
