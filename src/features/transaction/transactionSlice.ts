import { createSlice } from '@reduxjs/toolkit';

interface TransactionState {
    isLoading: boolean;
    payment_mode: string;
    description: string;
    transaction_type: string[];
    category: string[];
    amount: number;
    date: string;
    isEditing: boolean;
    editTransactionId: string;
}

const initialState: TransactionState = {
    isLoading: false,
    payment_mode: 'cash',
    description: '',
    transaction_type: ['expense', 'income'],
    category: [
        'food',
        'transportation',
        'housing',
        'utilities',
        'health care',
        'others',
        'bills',
        'insurance',
        'extra income',
        'rent',
        'salary',
        'stock',
        'clothing',
        'education',
        'shopping',
        'trip'
    ],
    amount: 0,
    date: '',
    isEditing: false,
    editTransactionId: ''
};

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        createTransaction: (state, action) => {
            //state.transactions.push();
        },
        clearValues: () => {
            return {
                ...initialState
            };
        }
    }
});

export const { createTransaction, clearValues } = transactionSlice.actions;

export default transactionSlice.reducer;
