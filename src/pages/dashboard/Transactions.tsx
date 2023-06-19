import React from 'react';
import { formatter, currency_symbol } from '../../utils/functions';
import SingleTransaction from '../../components/SingleTransaction';
import { Link } from 'react-router-dom';
import Button from '../../components/Form/Button';
import Modal from '../../components/Templates/Modal';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { Transaction, setIsModalOpen } from '../../features/transaction/transactionSlice';

export default function Transactions(): JSX.Element {
  const { transactions, isModalOpen } = useAppSelector((store) => store.transactions);
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(setIsModalOpen());
  };

  const handleTotal = (): void => {
    console.log();
  };

  if (transactions.length === 0) {
    return (
      <section className="w-full h-auto flex flex-col items-center justify-center py-1 px-1 my-12">
        <div>There is no transaction to show</div>
      </section>
    );
  }

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center py-1 px-1 my-12">
      <div className="w-60 mx-auto">
        <Button type="button" id="btn" text="Open Modal" onclick={handleClick} />
      </div>
      <div className="mt-4 px-4 py-4">
        <h2 className="font-semibold text-lg">Expense List</h2>
      </div>
      <div
        id="transactions-grid"
        className="bg-white w-1/2 h-96 shadow-2xl capitalize overflow-y-scroll scroll-smooth scroll"
      >
        {transactions.map((transaction: Transaction) => {
          return <SingleTransaction key={transaction?.id} transaction={transaction} />;
        })}
      </div>
      <div id="total-transactions" className="w-60 mx-auto mt-8">
        <Button type="button" id="btnn" text="Calculate Total" onclick={handleTotal} />
      </div>
      {/*  <div className="font-semibold mt-5">
        Expense Total: {formatter.format(total).replace(currency_symbol, '')}₺
      </div> */}
      <div className="mt-6 text-rose-500">
        <Link to="/landing">Go To Landing</Link>
      </div>
      {isModalOpen && <Modal />}
    </section>
  );
}
