import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, dencrement } = useCounter();

  return (
    <>
      <h1>Counter with Hooks: {counter}</h1>
      <hr />
      <button className="btn btn-primary " onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-danger " onClick={reset}>
        Reset
      </button>
      <button className="btn btn-warning " onClick={() => dencrement(2)}>
        -1
      </button>
    </>
  );
};
