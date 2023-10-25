import { TodoItemComponent } from './';

export const TodoListComponent = ({
  todos = [],
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItemComponent
            todo={todo}
            key={todo.id}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};
