import { ChangeEvent } from 'react';

type Props = {
  type?: string;
  text?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onchange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function FormRow({
  type,
  text,
  name,
  placeholder,
  value,
  onchange,
}: Props): JSX.Element {
  return (
    <div className="w-11/12 h-auto flex items-start justify-start flex-col mb-4">
      <label htmlFor={name} className="text-slate-900 font-semibold mb-2">
        {text}
      </label>
      <input
        id={name}
        type={type}
        className="h-11 rounded font-semibold w-full 
              border outline-0 px-2 py-2 placeholder:font-normal opacity-80"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onchange}
      />
    </div>
  );
}
