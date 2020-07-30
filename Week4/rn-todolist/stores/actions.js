import * as actions from "./actionTypes";

export const todoAdd = (title, description) => ({
  type: actions.TODO_ADD,
  payload: {
    title,
    description,
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
