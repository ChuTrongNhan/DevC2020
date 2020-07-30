import * as actions from "./actionTypes";

const idGenerate = () => {
  let now = new Date();
  return (
    "" +
    now.getYear() +
    now.getMonth() +
    now.getHours() +
    now.getMinutes() +
    now.getSeconds() +
    now.getMilliseconds()
  );
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.TODO_ADD:
      return [
        {
          id: idGenerate(),
          active: true,
          title: action.payload.title,
          description: action.payload.description,
        },
        ...state,
      ];
    case actions.TODO_REMOVE:
      return state.filter((todo) => todo.id != action.payload.id);
    case actions.TODO_TOGGLE:
      return state.map((todo) => ({
        ...todo,
        active: todo.id === action.payload.id ? !todo.active : todo.active,
      }));
    default:
      return state;
  }
};

export default reducer;
