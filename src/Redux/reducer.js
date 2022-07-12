import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./action";

export const reducer = (store = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...store,
        todos: [...store.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...store,
        todos: [action.payload],
      };
    case TOGGLE_TODO:
      return {
        todos: [action.payload],
      };
    default:
      return store;
  }
};
