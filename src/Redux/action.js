export const ADD_TODO = "ADD_TODO";
export const VALID_TODO = "VALID_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const validTodo = (payload) => ({
  type: VALID_TODO,
  payload,
});
export const toggleTodo = (payload) => ({
  type: TOGGLE_TODO,
  payload,
});
