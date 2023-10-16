import { useReducer } from 'react';
// import { todoReducer } from './todoReducer';
import { todoReducer, TodoListComponent, FormComponent } from './';
const initialState = [
  {
    id: new Date().getTime(),
    description: 'Get soul stone',
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: 'Get power stone',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);
  const handleNewTodo = (todo) => {
    console.log(todo);
  };
  console.log(todos);
  return (
    <>
      <h1>
        TodoApp: 10 - <small>To do: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoListComponent todos={todos} />
          {/* TodoList */}
          {/* <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span className="aling-self-center">{todo.id}</span>
                <button className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul> */}
          {/* TodoList */}
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
