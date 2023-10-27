import React, { useState } from 'react';
import { UserContext } from '../../09-UseContext/context/UserContext';
// const user = {
//   id: 123,
//   name: 'Ramon Alonso',
//   email: 'ramonalonso_giron@ucol.mx',
// };
export const UseProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

/*
  Usamos el contexto para poder pasar un state a todos los hijos, declaramos el context y en el nivel superior, 
  en vez usar el fragmento ponemos el UseProvider o el provider que sea y todos los hijos podran acceder a los valores,
  como el ejemlo del LoginPage
*/
