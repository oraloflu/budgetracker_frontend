import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import {
    Transaction,
    getAllTransactions,
    hideLoading,
    showLoading
} from '../allTransactions/allTransactionsSlice';
import { clearValues } from './transactionSlice';

export const createTransactionThunk = async (
    transaction: Transaction,
    thunkAPI: any
) => {
    try {
        const resp = await customFetch.post('/transaction', transaction);
        thunkAPI.dispatch(clearValues());
        return resp.data as any;
    } catch (error: any) {
        //return thunkAPI.rejectWithValue(error.response.data.msg)
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};

export const deleteTransactionThunk = async (
    transactionId: string,
    thunkAPI: any
) => {
    thunkAPI.dispatch(showLoading());
    try {
        const resp = await customFetch.delete(`/transaction/${transactionId}`);
        thunkAPI.dispatch(getAllTransactions);
        return resp.data as any;
    } catch (error: any) {
        thunkAPI.dispatch(hideLoading());
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};

export const editTransactionThunk = async (
    {
        transactionId,
        transaction
    }: { transactionId: string; transaction: Transaction },
    thunkAPI: any
) => {
    try {
        const resp = await customFetch.patch(
            `/transaction/${transactionId}`,
            transaction
        );
        thunkAPI.dispatch(clearValues());
        return resp.data as any;
    } catch (error: any) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};
