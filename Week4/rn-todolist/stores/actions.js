import * as actions from "./actionTypes";

export const todoAdd = (title) => ({
  type: actions.TODO_ADD,
  payload: {
    title,
  },
});

export const todoRemove = (id) => ({
  type: actions.TODO_REMOVE,
  payload: {
    id,
  },
});

export const todoToggle = (id) => ({
  type: actions.TODO_TOGGLE,
  payload: {
    id,
  },
});
