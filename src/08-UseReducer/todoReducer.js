export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload]; // Retornamos un areglo [] por que el initialState es lo que recibe, si no recibe eso cambia lo que devuelve
    case '[TODO] Remove Todo':
      return initialState.filter((todo) => todo.id !== action.payload);
    case '[TODO] Toggle Todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    default:
      return initialState;
  }
};
