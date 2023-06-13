import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AsyncThunkConfig } from '../allTransactions/allTransactionsSlice';
import {
    createTransactionThunk,
    deleteTransactionThunk,
    editTransactionThunk
} from './transactionThunk';

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

export const createTransaction: AsyncThunk<any, any, AsyncThunkConfig> =
    createAsyncThunk('transaction/createTransaction', createTransactionThunk);

export const editTransaction: AsyncThunk<any, any, AsyncThunkConfig> =
    createAsyncThunk('transaction/editTransaction', editTransactionThunk);

export const deleteTransaction: AsyncThunk<any, any, AsyncThunkConfig> =
    createAsyncThunk('transaction/deleteTransaction', deleteTransactionThunk);

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        handleChange: (state, action) => {
            //state.transactions.push();
        },
        clearValues: () => {
            return {
                ...initialState
            };
        }
    }
});

export const { handleChange, clearValues } = transactionSlice.actions;

export default transactionSlice.reducer;
