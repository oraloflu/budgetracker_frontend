import Button from "./Button";
import FormRow from "./FormRow";
import { useGlobalContext } from "../context/AppContext";

export default function Modal() {
    const { setIsModalOpen } = useGlobalContext();

    const handleClick = () => {
        setIsModalOpen(false);
    };

    return (
        <section
            className="w-full h-full z-10 absolute inset-0 
            flex items-center justify-center bg-gray-400">
            <div className="shadow-md w-1/3 h-96 bg-slate-200 relative rounded">
                <div
                    className="w-8 h-8 font-semibold text-base 
                    absolute top-2 right-4 rounded-full bg-red-400
                    px-2.5 py-1 cursor-pointer text-white"
                    onClick={handleClick}
                >
                    X
                </div>
                <form action="" className="px-4 py-4">
                    <FormRow
                        name="title"
                        type="text"
                        text="Title"
                        placeholder="Where was the expense made?"
                    />
                    <FormRow
                        name="amount"
                        type="text"
                        text="Amount"
                        placeholder="How much was it cost?"
                    />
                    <FormRow
                        name="date"
                        type="date"
                        text="Date"
                        placeholder=""
                    />
                    <Button
                        text="Add Expense"
                        onclick={() => null}
                    />
                </form>
            </div>
        </section>
    );
}