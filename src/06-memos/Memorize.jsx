import React, { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const incre = 2;
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter:{' '}
        <small>
          <Small counterVal={counter} />
        </small>
      </h1>
      <hr />
      <button className="bnt btn-primary" onClick={() => increment(incre)}>
        +{incre}
      </button>
      <br />
      <button onClick={() => setShow(!show)}>
        Show / Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
