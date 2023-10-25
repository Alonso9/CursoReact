import { useReducer, useEffect } from 'react';
import { todoReducer } from '../08-UseReducer/index';

export const useTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, [], init); // El init se una para inicializar el reducer, lo inicializamos con el Storage

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
    const action = {
      type: '[TODO] Remove Todo',
      payload: id,
    };

    dispatchTodo(action);
  };

  const onToggleTodo = (id) => {
    dispatchTodo({
      type: '[TODO] Toggle Todo',
      payload: id,
    });
  };
  const TodosDone = todos.filter((todo) => todo.done === true);
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: TodosDone.length,
  };
};
