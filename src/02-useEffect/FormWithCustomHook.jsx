import React, { useState, useEffect } from 'react';
import { Message } from './Messaje';
import { EmailMessage } from './EmailMessage';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  // Llamamos el useForm y le pasamos un objeto con los datos del formulario, de esa manera sino existe un campo solo no se pasa y destructuramos sus datos
  const { formState, onInputChange, userName, email, passwd, onResetForm } =
    useForm({
      userName: '',
      email: '',
      passwd: '',
    });
  // Como destructuramos el formState desde el Hook podemos acceder a esas varibles directamente como se hizo con el username, passwd y email

  // Del formState que destructuramos, aora extraemos los datos, para evitar este paso podemos desde el useForm destructurar el formState
  //   const { username, email, passwd } = formState;

  //   useEffect(() => {
  //     // console.log('useEffec');
  //   }, []);

  //   useEffect(() => {
  //     // console.log('formState changed!');
  //   }, [formState]);

  //   useEffect(() => {
  //     // console.log('email changed!');
  //     // console.log(email);
  //   }, [email]);

  return (
    <>
      <h1>Form with Custom Hooks</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        name="userName"
        placeholder="UserName"
        value={userName}
        onChange={onInputChange}
      />
      {/* <EmailMessage /> */}
      <input
        type="text"
        className="form-control mt-2"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        name="passwd"
        placeholder="Password"
        value={passwd}
        onChange={onInputChange}
      />

      <button className="btn btn-warning mt-8" onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};
