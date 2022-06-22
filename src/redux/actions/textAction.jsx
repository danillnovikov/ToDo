import { SET_TEXT } from './actionTypes';

export const setText = (data) => {
  return {
    type: SET_TEXT,
    payload: data,
  };
};
