import React from 'react';

interface Props {
  title?: string;
}
export default function FormTitle({ title }: Props): JSX.Element {
  return (
    <div className="py-2">
      <h3 className="font-mono font-semibold px-2 my-2 text-2xl">
        {title} Form
      </h3>
    </div>
  );
}
