import {
    createSlice,
    createAsyncThunk,
    AsyncThunk,
    Dispatch,
    PayloadAction
} from '@reduxjs/toolkit';
import {
    getAllTransactionsThunk,
    showStatsThunk
} from './allTransactionsThunk';
import { toast } from 'react-toastify';

export type AsyncThunkConfig = {
    /** return type for `thunkApi.getState` */
    state?: unknown;
    /** type for `thunkApi.dispatch` */
    dispatch?: Dispatch;
    /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
    extra?: unknown;
    /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
    rejectValue?: unknown;
    /** return type of the `serializeError` option callback */
    serializedErrorType?: unknown;
    /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
    pendingMeta?: unknown;
    /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
    fulfilledMeta?: unknown;
    /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
    rejectedMeta?: unknown;
};

export type Transaction = {
    payment_mode: string;
    description: string;
    transaction_type: string[];
    category: string[];
    amount: number;
    date: string;
};

export type TransactionStats = {
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

export interface FiltersState {
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

export interface AllTransactionsState {
    [key: string]: any;
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

export const getAllTransactions: AsyncThunk<any, any, AsyncThunkConfig> =
    createAsyncThunk(
        'allTransactions/getTransactions',
        getAllTransactionsThunk
    );

export const showStats: AsyncThunk<any, any, AsyncThunkConfig> =
    createAsyncThunk('allTransactions/showStats', showStatsThunk);

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
        handleChange: (
            state,
            action: PayloadAction<{ name: string; value: string }>
        ) => {
            state.page = 1;
            state[action.payload.name] = action.payload.value;
        },
        clearFilters: (state) => {
            return { ...state, ...initialFiltersState };
        },
        changePage: (state, { payload }: { payload: any }) => {
            state.page = payload;
        },
        clearAllTransactionsState: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTransactions.pending, (state) => {
                state.isLoading = false;
            })
            .addCase(getAllTransactions.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.transactions = payload.transactions;
                state.numOfPages = payload.numOfPages;
                state.totalTransactions = payload.totalTransactions;
            })
            .addCase(
                getAllTransactions.rejected,
                (state, { payload }: { payload: any }) => {
                    state.isLoading = false;
                    toast.error(payload);
                }
            );
        builder
            .addCase(showStats.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                showStats.fulfilled,
                (state, { payload }: { payload: any }) => {
                    state.isLoading = false;
                    state.stats = payload.defaultStats;
                }
            )
            .addCase(
                showStats.rejected,
                (state, { payload }: { payload: any }) => {
                    state.isLoading = false;
                    toast.error(payload);
                }
            );
    }
});

export const {
    showLoading,
    hideLoading,
    handleChange,
    clearFilters,
    changePage,
    clearAllTransactionsState
} = transactionSlice.actions;

export default transactionSlice.reducer;
