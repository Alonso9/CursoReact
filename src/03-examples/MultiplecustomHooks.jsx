import React from 'react';
// import { useFetch } from '../hooks/useFetch';
// import { useCounter } from '../hooks/useCounter';
import { useFetch, useCounter } from '../hooks';
import './css/style.css';

export const MultiplecustomHooks = () => {
  const { increment, counter } = useCounter(1);
  const url = 'https://api.breakingbadquotes.xyz/v1/quotes/' + counter;
  const { data, isLoading, haserror } = useFetch(url);

  console.log({ data, isLoading, haserror });

  return (
    <>
      <h1 className="TitleBar">BreakingBad Quotes</h1>
      <br />
      <h1 className="Title">BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          {/* <p className="mb-1">Hello world</p> */}
          <p className="mb-1">{data[0].quote}</p>
          {/* <footer className="blockquote-footer">Alonso ;D</footer> */}
          <footer className="blockquote-footer">{data[0].author}</footer>
        </blockquote>
      )}

      <button
        className="btn btn-primary"
        onClick={() => increment(1)}
        disabled={isLoading}
      >
        Next quote
      </button>
      {/* <h1>{counter}</h1>
      <h1>{url}</h1> */}
    </>
  );
};
