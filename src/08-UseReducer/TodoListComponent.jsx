import { TodoItemComponent } from './';

export const TodoListComponent = ({ todos }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItemComponent todo={todo} key={todo.id} />
          //   <li
          //     key={todo.id}
          //     className="list-group-item d-flex justify-content-between"
          //   >
          //     <span className="aling-self-center">{todo.description}</span>
          //     <button className="btn btn-danger">Delete</button>
          //   </li>
        ))}
      </ul>
    </>
  );
};
