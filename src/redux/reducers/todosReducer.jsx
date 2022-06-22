import { SET_TODO, DELETE_TODO, CHANGE_STATUS } from '../actions/actionTypes';

const initialValue = [];

export default function todosReducer(state = initialValue, action) {
  switch (action.type) {
    case SET_TODO: {
      return [
        ...state,
        {
          id: new Date().toISOString(),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case DELETE_TODO: {
      return [...state.filter((todo) => todo.id !== action.payload)];
    }
    case CHANGE_STATUS: {
      return [
        ...state.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      ];
    }
    default:
      return state;
  }
}
