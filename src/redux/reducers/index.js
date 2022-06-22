import { combineReducers } from 'redux';
import textReducer from './textReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  text: textReducer,
  todos: todosReducer,
});
