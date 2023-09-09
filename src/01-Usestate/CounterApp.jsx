import React, { useState } from 'react';

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>

      <button
        className="btn btn-warning"
        onClick={() =>
          setCounter({
            // Para no poner todas las varibles destructuramos el state con los counters y solo modificamos el que queremos modificar en la funcion
            ...state,
            counter1: counter1 - 1,
          })
        }
      >
        -1
      </button>
    </>
  );
};
