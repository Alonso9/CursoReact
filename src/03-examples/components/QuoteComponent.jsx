import React, { useLayoutEffect, useRef, useState } from 'react';
import './style.css';

export const QuoteComponent = ({ data }) => {
  const { quote, author } = data;
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  const pRef = useRef();
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({
      width: width,
      height: height,
    });
  }, [quote]);
  return (
    <>
      <blockquote className="blockquote text-end">
        <div className="container">
          <p ref={pRef} className="mb-1">
            {quote}
          </p>
          <br />
          <footer className="blockquote-footer">{author}</footer>
        </div>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
