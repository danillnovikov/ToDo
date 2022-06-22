import { SET_TODO, DELETE_TODO, CHANGE_STATUS } from './actionTypes';

export const setTask = (data) => {
  return {
    type: SET_TODO,
    payload: data,
  };
};

export const deleteTodo = (data) => {
  return {
    type: DELETE_TODO,
    payload: data,
  };
};
export const changeStatus = (data) => {
  return {
    type: CHANGE_STATUS,
    payload: data,
  };
};
