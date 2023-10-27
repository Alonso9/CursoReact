import React, { useContext } from 'react';
import { UserContext } from '../09-UseContext/context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <h2>{user?.name}</h2>
      <button
        onClick={() =>
          setUser({ id: 123, user: 'Alonso ', email: 'correo@gmail.com' })
        }
        className="btn btn-primary"
      >
        Set user
      </button>
    </>
  );
};
