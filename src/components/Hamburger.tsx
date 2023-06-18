import React from 'react';

export default function Hamburger(): JSX.Element {
  return (
    <div
      id="hamburger"
      className="w-60 h-24 flex flex-col items-center justify-center 
          cursor-pointer"
    >
      <span
        className="block w-10 h-1 border-3 bg-rose-700 my-1 
              rounded"
      ></span>
      <span
        className="block w-10 h-1 border-3 bg-rose-700 my-1 
              rounded"
      ></span>
      <span
        className="block w-10 h-1 border-3 bg-rose-700 my-1 
              rounded"
      ></span>
    </div>
  );
}
