import { ADD_TODO, VALID_TODO, TOGGLE_TODO } from "./action";

export const reducer = (store = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...store,
        todos: [...store.todos, action.payload],
      };
    case VALID_TODO:
      return {
        ...store,
        todos: [...action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...store,
        todos: [...action.payload],
      };
    default:
      return store;
  }
};
