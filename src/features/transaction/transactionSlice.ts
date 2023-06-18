import {
    AsyncThunk,
    createAsyncThunk,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AsyncThunkConfig } from '../allTransactions/allTransactionsSlice';
import {
    createTransactionThunk,
    deleteTransactionThunk,
    editTransactionThunk
} from './transactionThunk';

interface TransactionState {
    [key: string]: any;
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
        handleChange: (
            state,
            action: PayloadAction<{ name: string; value: string }>
        ): void => {
            state[action.payload.name] = action.payload.value;
        },
        clearValues: () => {
            return {
                ...initialState
            };
        },
        setEditTransaction: (state, action: PayloadAction<{}>) => {
            return { ...state, isEditing: true, ...action.payload };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTransaction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                createTransaction.fulfilled,
                (state, action: PayloadAction<{}>) => {
                    state.isLoading = false;
                    toast.success('Transaction created');
                }
            )
            .addCase(
                createTransaction.rejected,
                (state, { payload }: { payload: any }) => {
                    state.isLoading = false;
                    toast.error(payload);
                }
            );
        builder
            .addCase(editTransaction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                editTransaction.fulfilled,
                (state, action: PayloadAction<{}>) => {
                    state.isLoading = false;
                    toast.success('Transaction modified...');
                }
            )
            .addCase(
                editTransaction.rejected,
                (state, { payload }: { payload: any }) => {
                    state.isLoading = false;
                    toast.error(payload);
                }
            );
        builder
            .addCase(deleteTransaction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                deleteTransaction.fulfilled,
                (state, action: PayloadAction<{}>) => {
                    toast.success(action.payload as any);
                }
            )
            .addCase(
                deleteTransaction.rejected,
                (state, { payload }: { payload: any }) => {
                    state.isLoading = false;
                    toast.error(payload);
                }
            );
    }
});

export const { handleChange, clearValues } = transactionSlice.actions;

export default transactionSlice.reducer;
