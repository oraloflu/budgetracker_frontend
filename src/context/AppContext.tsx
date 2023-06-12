import React, { useContext, useState, useEffect } from 'react';
import { IExpense } from '../types/expense.type';
// You should probably use the .tsx extension.
// Otherwise you'll get  AppContext undefined an error

// https://www.behance.net/gallery/65608331/Expense-Tracker-Dashboard-%28With-live-demo%29

const Categories: string[] = [
  'food',
  'transportation',
  'housing',
  'extra income',
  'rent',
  'salary',
  'stock',
  'clothing',
  'education',
  'shopping',
  'trip',
];

const paymentModes: string[] = ['cash', 'debit card', 'credit card'];

interface IAppContext {
  expenses: IExpense[];
  total: number;
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
  createExpense: (expense: IExpense) => void;
  editExpense: (id: number, newExpense: IExpense) => void;
  deleteExpense: (id: number) => void;
  calculateTotal: (expenses: IExpense[]) => void;
}

type Props = {
  children?: React.ReactNode;
};

const AppContext = React.createContext<IAppContext>({
  expenses: [],
  total: 0,
  isModalOpen: false,
  setIsModalOpen: (bool: boolean) => null,
  createExpense: (expense: IExpense) => null,
  editExpense: (id: number, newExpense: IExpense) => null,
  deleteExpense: (id: number) => null,
  calculateTotal: (expenses: IExpense[]) => null,
});

//AppContext.displayName = 'AppContext';

function AppProvider({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [total, setTotal] = useState(0);

  const readExpenses = async (): Promise<void> => {
    try {
      const response = await fetch('data/expenses.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const result = await response.json();
      const { expenses } = result;
      console.log(expenses);
      setExpenses(expenses);
    } catch (error) {
      console.log(error);
    }
  };

  const createExpense = (expense: IExpense): void => {
    if (expense !== null) {
      setExpenses([...expenses, expense]);
    }
  };

  const editExpense = (id: number, expense: IExpense): void => {
    if (id && expense !== null) {
      const updatedExpenses = expenses.map((item) => {
        if (id === item.id) {
          return {
            ...expense,
            title: expense.title,
            amount: expense.amount,
            date: expense.date,
          };
        }
        return item;
      });
      setExpenses(updatedExpenses);
    }
  };

  const deleteExpense = (id: number): void => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(filteredExpenses);
  };

  const calculateTotal = (expenses: IExpense[]): void => {
    const totalExpense: number = expenses.reduce(
      (acc, curr) => acc + (curr.amount || 0),
      0
    );
    setTotal(totalExpense);
  };

  const createList = (): void => {};

  useEffect(() => {
    readExpenses();
  }, []);

  return (
    <AppContext.Provider
      value={{
        expenses,
        total,
        isModalOpen,
        setIsModalOpen,
        createExpense,
        editExpense,
        deleteExpense,
        calculateTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
