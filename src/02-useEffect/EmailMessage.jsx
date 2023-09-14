import React, { useEffect, useState } from 'react';

export const EmailMessage = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  //   useEffect(() => {
  //     // Creamos una funcion para ver las coordenadas del mouse
  //     const onMouseMove = ({ x, y }) => {
  //       // const coords = { x, y };
  //       setCoords({ x, y });
  //     };

  //     window.addEventListener('mousemove', onMouseMove); // Llamamos la funcion de coordenadas, y se pasa por referencia para tener un mejor control
  //     return () => {
  //       window.removeEventListener('mousemove', onMouseMove); // Quitamos el listener para cuando el componente no exista no ejecute la funcion y no gaste memoria
  //     };
  //   }, []);
  return (
    <>
      <h1>Please introduce a valid email!</h1>
    </>
  );
};
