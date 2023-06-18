import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import type { AsyncThunkConfig } from '../allTransactions/allTransactionsSlice';
import {
  createTransactionThunk,
  deleteTransactionThunk,
  editTransactionThunk
} from './transactionThunk';

export interface Transaction {
  id?: string;
  payment_mode: string;
  description: string;
  transaction_type: string[];
  category: string[];
  amount: number;
  date: string;
}

interface TransactionState {
  [key: string]: any;
  isLoading: boolean;
  isModalOpen: boolean;
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
  isModalOpen: false,
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

export const createTransaction: AsyncThunk<any, Transaction, AsyncThunkConfig> =
  createAsyncThunk('transaction/createTransaction', createTransactionThunk);

export const editTransaction: AsyncThunk<any, any, AsyncThunkConfig> = createAsyncThunk(
  'transaction/editTransaction',
  editTransactionThunk
);

export const deleteTransaction: AsyncThunk<any, string, AsyncThunkConfig> =
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
    setIsModalOpen: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setEditTransaction: (state, action: PayloadAction<Transaction>) => {
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
        (state, action: PayloadAction<Transaction>) => {
          state.isLoading = false;
          toast.success('Transaction created');
        }
      )
      .addCase(createTransaction.rejected, (state, { payload }: { payload: any }) => {
        state.isLoading = false;
        toast.error(payload);
      });
    builder
      .addCase(editTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTransaction.fulfilled, (state, action: PayloadAction<Transaction>) => {
        state.isLoading = false;
        toast.success('Transaction modified...');
      })
      .addCase(editTransaction.rejected, (state, { payload }: { payload: any }) => {
        state.isLoading = false;
        toast.error(payload);
      });
    builder
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        deleteTransaction.fulfilled,
        (state, action: PayloadAction<Transaction>) => {
          toast.success(action.payload as any);
        }
      )
      .addCase(deleteTransaction.rejected, (state, { payload }: { payload: any }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  }
});

export const { handleChange, clearValues, setIsModalOpen, setEditTransaction } =
  transactionSlice.actions;

export default transactionSlice.reducer;
