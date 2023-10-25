/*
    Usamos el useform para manejar mejor los inputs, ahora solo le pasamos props
    description para que alla lo maneje, en caso de que su tamano es mayor a 1
    pues lanzamos las funciones, que en este caso es handle y le passamos el newTodo con la descripcion.
*/

import { useForm } from '../hooks/useForm';

export const FormComponent = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(description);
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime() * 2,
      description: description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="New to do?"
          name="description"
          value={description}
          onChange={onInputChange}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
};
