import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // Creamos una funcion para ver las coordenadas del mouse
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove); // Llamamos la funcion de coordenadas, y se pasa por referencia para tener un mejor control
    return () => {
      window.removeEventListener('mousemove', onMouseMove); // Quitamos el listener para cuando el componente no exista no ejecute la funcion y no gaste memoria
    };
  }, []);
  return (
    <>
      <h1>User already exist!</h1>
      {JSON.stringify(coords)}
    </>
  );
};

/* 
  Nota usamos el UseState paraaceeder a las varibles [x, y] pero cuando el componente no existe no se acceden a ellas, por eso daria error, para evitar eso, 
  volvemos a usar lo de quitar el Listener o metodo del useEffect cuando el componente no existe para evitar ejecutar esa funcion y llamar varibles que no existen,
  osea evitamos hacer cambios en el State de un componente que no existe
*/
