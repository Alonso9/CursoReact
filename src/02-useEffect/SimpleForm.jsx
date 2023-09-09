import React, { useState, useEffect } from 'react';
import { Message } from './Messaje';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: 'Alonso',
    email: 'Alons@gmail.com',
  });

  const { userName, email } = formState;

  // Del evento podemos destructurar el tarjet para si solo obtener los valores colo value y el name del input
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Sirve para ejecutar efectos secundarios, se llama cada vez que el form se esta cambiando o dibujando en pantalla
  useEffect(() => {
    console.log('useEffec');
  }, []); // Como le pasamos una lista de dependencias vacias, solo se ejecuta una sola vez y ya

  useEffect(() => {
    console.log('formState changed!');
  }, [formState]); // Para este caso solo llamamos este useEffec cuando el formState cambie

  useEffect(() => {
    console.log('email changed!');
  }, [email]); // Para este caso solo llamamos este useEffec cuando el email cambie

  return (
    <>
      <h1>Simple form</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        name="userName"
        placeholder="UserName"
        value={userName}
        onChange={onInputChange}
      />
      <Message />
      <input
        type="text"
        className="form-control mt-2"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
