import React from 'react';
import { useFetch } from '../hooks/useFetch';
import './css/style.css';

export const MultiplecustomHooks = () => {
  const { data, isLoading, haserror } = useFetch(
    'https://api.breakingbadquotes.xyz/v1/quotes/5'
  );

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
    </>
  );
};
