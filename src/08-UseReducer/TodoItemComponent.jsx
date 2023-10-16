export const TodoItemComponent = ({ todo }) => {
  return (
    <div>
      <li
        key={todo.id}
        className="list-group-item d-flex justify-content-between"
      >
        <span className="aling-self-center">{todo.description}</span>
        <button className="btn btn-danger">Delete from other com</button>
      </li>
    </div>
  );
};
