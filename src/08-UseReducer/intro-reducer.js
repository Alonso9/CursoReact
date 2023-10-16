const initialState = [
  {
    id: 1,
    todo: 'Get Soul Stone',
    done: false,
  },
];

/* Primer argumento como nicia el reducer y la accion que queremos que se ejecute */
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO] add todo') {
    return [...state, action.payload];
  }
  return state; // Una condicion del Reducer es que siempre tiene que retorna un estado o forma de este
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Get Power Stone',
  done: false,
};

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
