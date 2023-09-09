import { useState } from 'react';

// Metemos toda logica del contador en el JS y dejamos el componente limpio

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const dencrement = (value = 1) => {
    if (counter == 0) return;
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    dencrement,
    reset,
  };
};
