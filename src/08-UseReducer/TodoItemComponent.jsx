/*
  Del componete hijo pasamos toggleTodo y asi secesivamente
*/
export const TodoItemComponent = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <div>
      <li
        key={todo.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span
          className={`align-self-center ${
            todo.done && 'text-decoration-line-through'
          }`}
        >
          {todo.description}
        </span>
        <input
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={todo.done}
          onChange={() => onToggleTodo(todo.id)}
        />
        <button
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};
