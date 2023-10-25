import { todoReducer, TodoListComponent, FormComponent } from './';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
  } = useTodo(todoReducer);

  return (
    <>
      <h1>
        TodoApp: {todosCount} - <small>To do: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoListComponent
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4> Add todo</h4>
          <hr />
          <FormComponent onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
