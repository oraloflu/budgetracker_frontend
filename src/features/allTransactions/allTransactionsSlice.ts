import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTransactionsThunk, showStatsThunk } from './allTransactionsThunk';

type Transaction = {
    payment_mode: string;
    description: string;
    transaction_type: string[];
    category: string[];
    amount: number;
    date: string;
};

type TransactionStats = {
    food: number;
    transportation: number;
    mortgage_rental: number;
    utilities: number;
    health_care: number;
    others: number;
    bills: number;
    insurance: number;
    clothing: number;
    education: number;
    shopping: number;
    extra_income: number;
    apartment_rent: number;
    sale: number;
    investment: number;
    bet_earnings: number;
};

interface FiltersState {
    search: string;
    searchStatus: string;
    searchRange: {
        start: string;
        end: string;
    };
    searchCategory: string;
    cashFlow: string[];
    amountCriteria: {
        min: number;
        max: number;
    };
    sort: string;
    sortOptions: string[];
}
const initialFiltersState: FiltersState = {
    search: '',
    searchStatus: 'all',
    searchRange: {
        start: '',
        end: ''
    },
    searchCategory: '',
    cashFlow: ['income', 'expense'],
    amountCriteria: {
        min: 0,
        max: 0
    },
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
};

interface AllTransactionsState {
    isLoading: boolean;
    transactions: Transaction[];
    totalTransactions: number;
    numOfPages: number;
    page: number;
    stats: TransactionStats;
}

const initialState: AllTransactionsState = {
    isLoading: false,
    transactions: [],
    totalTransactions: 0,
    numOfPages: 0,
    page: 1,
    stats: {
        others: 0,
        clothing: 0,
        health_care: 0,
        insurance: 0,
        transportation: 0,
        shopping: 0,
        bills: 0,
        utilities: 0,
        food: 0,
        mortgage_rental: 0,
        education: 0,
        extra_income: 0,
        apartment_rent: 0,
        sale: 0,
        investment: 0,
        bet_earnings: 0
    },
    ...initialFiltersState
};

export const getAllTransactions = createAsyncThunk(
    'allTransactions/getTransactions',
    getAllTransactionsThunk
);

export const showStats = createAsyncThunk('allTransactions/showStats', showStatsThunk);

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        createTransaction: (state, action) => {
            state.transactions.push();
        },
        clearAllTransactionsState: (state) => initialState
    }
});

export const { createTransaction, clearAllTransactionsState } = transactionSlice.actions;

export default transactionSlice.reducer;
