import { formatter, currency_symbol } from '../utils/functions';
import { useGlobalContext } from '../context/AppContext';
import Button from './Button';
import FormRow from './FormRow';
import { ChangeEvent, FormEvent, useState } from 'react';

type Props = {
    expense: {
        id: number;
        title: string;
        amount: number;
        date: string;
    };
};

export default function SingleExpense({ expense }: Props): JSX.Element {
    // You cannot keep isEditing logic at Global Context. Otherwise it won't work!!
    const [isEditing, setIsEditing] = useState(false);
    const [newExpense, setNewExpense] = useState({
        id: expense.id,
        title: expense.title,
        amount: expense.amount,
        date: expense.date
    });
    const { editExpense, deleteExpense } = useGlobalContext();

    const toggleExpense = () => {
        setIsEditing(!isEditing);
    };

    const handleEdit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        editExpense(expense.id, newExpense);
        toggleExpense();
    };

    const handleDelete = (id: number) => {
        deleteExpense(id);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                    id={'btn' + id}
                    onclick={toggleExpense}
                />
                <Button
                    text="Delete"
                    type="button"
                    id={'btn' + id}
                    onclick={() => handleDelete(id)}
                />
            </article>
        );
    }
}
