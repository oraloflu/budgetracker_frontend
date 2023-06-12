import { useGlobalContext } from '../../context/AppContext';
import { formatter, currency_symbol } from '../../utils/functions';
import SingleExpense from '../../components/SingleExpense';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { IExpense } from '../../types/expense.type';

export default function Stats(): JSX.Element {
  const { expenses, isModalOpen, setIsModalOpen, calculateTotal, total } =
    useGlobalContext();

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTotal = () => {
    calculateTotal(expenses);
  };

  if (expenses.length === 0) {
    return (
      <section
        className="w-full h-auto flex flex-col items-center justify-center 
      py-1 px-1 my-12"
      >
        <div>There is no expense to show</div>
      </section>
    );
  }
  return (
    <section
      className="w-full h-auto flex flex-col items-center 
      justify-center py-1 px-1 my-12"
    >
      <div className="w-60 mx-auto">
        <Button
          type="button"
          id="btn"
          text="Open Modal"
          onclick={handleClick}
        />
      </div>
      <div className="mt-4 px-4 py-4">
        <h2 className="font-semibold text-lg">Expense List</h2>
      </div>
      <div
        id="expenses-grid"
        className="bg-white w-1/2 h-96 shadow-2xl capitalize 
        overflow-y-scroll scroll-smooth scroll"
      >
        {expenses &&
          expenses.map((expense: IExpense) => {
            return <SingleExpense key={expense?.id} expense={expense} />;
          })}
      </div>
      <div id="total-expenses" className="w-60 mx-auto mt-8">
        <Button
          type="button"
          id="btnn"
          text="Calculate Total"
          onclick={handleTotal}
        />
      </div>
      <div className="font-semibold mt-5">
        Expense Total: {formatter.format(total).replace(currency_symbol, '')}₺
      </div>
      <div className="mt-6 text-rose-500">
        <Link to="/landing">Go To Landing</Link>
      </div>
      {isModalOpen && <Modal />}
    </section>
  );
}
