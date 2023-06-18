import React from 'react';

interface Props {
  text: string;
  onclick: React.MouseEventHandler;
  /*  type: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >; */
  type: 'button' | 'submit' | 'reset' | undefined;
  id: string;
}

export default function Button({
  text,
  onclick,
  type,
  id
}: Props): JSX.Element {
  return (
    <div className="w-11/12 h-auto">
      <button
        type={type}
        id={id}
        className="rounded hover:scale-95 transition-all 
              w-full h-11 px-2 outline-0 border-0 cursor-pointer
              font-semibold text-base bg-rose-700 text-white"
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
}
