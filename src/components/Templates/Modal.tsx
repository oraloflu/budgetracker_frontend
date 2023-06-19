import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import Button from '../Form/Button';
import FormRow from '../Form/FormRow';
import { IExpense } from '../../types/expense.type';

export default function Modal(): JSX.Element {
  const [expense, setExpense] = useState({
    title: '',
    amount: 0,
    date: ''
  });
  const { setIsModalOpen, createExpense } = useGlobalContext();

  const handleClick = (event: MouseEvent<Element, globalThis.MouseEvent>): void => {
    setIsModalOpen(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const name = event.target.name;
    const newExpense = { ...expense, [name]: value };
    setExpense(newExpense);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    createExpense(expense);
    setExpense({
      title: '',
      amount: 0,
      date: ''
    });
  };

  return (
    <section className="w-full h-full z-10 absolute inset-0 flex items-center justify-center">
      <div className="shadow-2xl w-1/3 h-96 bg-slate-200 relative rounded py-2 px-8">
        <div
          className="w-8 h-8 font-semibold text-base absolute top-3 right-6 rounded-full bg-rose-800 px-2.5 py-1 cursor-pointer text-white"
          onClick={handleClick}
        >
          X
        </div>
        <form action="" className="px-4 py-4" onSubmit={handleSubmit}>
          <FormRow
            name="title"
            type="text"
            text="Title"
            placeholder="Where was the expense made?"
            value={expense.title}
            onchange={handleChange}
          />
          <FormRow
            name="amount"
            type="text"
            text="Amount"
            placeholder="How much was it cost?"
            value={String(expense.amount)}
            onchange={handleChange}
          />
          <FormRow
            name="date"
            type="date"
            text="Date"
            placeholder=""
            value={expense.date}
            onchange={handleChange}
          />
          <Button
            text="Add Expense"
            type="submit"
            id="submit"
            onclick={(e) => {
              handleClick(e);
            }}
          />
        </form>
      </div>
    </section>
  );
}
