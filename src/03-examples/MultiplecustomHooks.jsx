import React from 'react';
import { LoadingComponent } from './components/isLoading';
import { QuoteComponent } from './components/QuoteComponent';
// import { useFetch } from '../hooks/useFetch';
// import { useCounter } from '../hooks/useCounter';
import { useFetch, useCounter } from '../hooks';
import './css/style.css';

export const MultiplecustomHooks = () => {
  const { increment, counter } = useCounter(1);
  const url = 'https://api.breakingbadquotes.xyz/v1/quotes/' + counter;
  const { data, isLoading, haserror } = useFetch(url);

  return (
    <>
      <h1 className="TitleBar">BreakingBad Quotes</h1>
      <br />
      <h1 className="Title">BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingComponent /> : <QuoteComponent data={data[0]} />}

      <button
        className="btn btn-primary"
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
