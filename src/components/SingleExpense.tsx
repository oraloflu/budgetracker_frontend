import React, { ChangeEvent, FormEvent, useState } from 'react';
import { formatter, currency_symbol } from '../utils/functions';
import Button from './Button';
import FormRow from './FormRow';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';

interface Props {
  expense: {
    id: number;
    title: string;
    amount: number;
    date: string;
  };
}

export default function SingleExpense({ expense }: Props): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);
  const [newExpense, setNewExpense] = useState({
    id: expense.id,
    title: expense.title,
    amount: expense.amount,
    date: expense.date
  });

  const { editExpense, deleteExpense } = useSelector(
    (store: RootState) => store.transactions
  );
  // eslint-disable-next-line
  const dispatch = useDispatch();

  const toggleExpense = (): void => {
    setIsEditing(!isEditing);
  };

  const handleEdit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    editExpense(expense.id, newExpense);
    toggleExpense();
  };

  const handleDelete = (id: number): void => {
    deleteExpense(id);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    setNewExpense({ ...newExpense, [name]: value });
  };

  if (isEditing) {
    return (
      <article className="w-86 h-16 border">
        <form
          action=""
          className="grid grid-cols-4 items-center px-4 pb-4"
          onSubmit={handleEdit}
        >
          <FormRow
            name="title"
            type="text"
            text=""
            placeholder="Where was the expense made?"
            value={newExpense.title}
            onchange={handleChange}
          />
          <FormRow
            name="amount"
            type="text"
            text=""
            placeholder="How much was it cost?"
            value={String(newExpense.amount)}
            onchange={handleChange}
          />
          <FormRow
            name="date"
            type="date"
            text=""
            placeholder=""
            value={newExpense.date}
            onchange={handleChange}
          />
          <Button
            id="btnnn"
            text="Edit Expense"
            type="submit"
            onclick={() => null}
          />
        </form>
      </article>
    );
  } else {
    const { id, title, amount, date } = expense;
    return (
      <article
        className="w-86 h-16 border grid grid-cols-5 items-center
            shadow-md py-1 px-4"
      >
        <h4 className="font-medium text-base px-2">{title}</h4>
        <h4 className="font-medium text-base px-2">
          {formatter.format(Number(amount)).replace(currency_symbol, '')}₺
        </h4>
        <h4 className="font-medium text-base px-2">{String(date)}</h4>
        <Button
          text="Edit"
          type="button"
          id={`btn${id}`}
          onclick={toggleExpense}
        />
        <Button
          text="Delete"
          type="button"
          id={`btn${id}`}
          onclick={() => {
            handleDelete(id);
          }}
        />
      </article>
    );
  }
}
