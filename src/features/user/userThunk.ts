import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { clearAllTransactionsState } from '../allTransactions/allTransactionsSlice';
import { clearValues } from '../transaction/transactionSlice';
import { User, logoutUser } from './userSlice';

export const registerUserThunk = async (url: string, user: User, thunkAPI: any) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data as any;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const loginUserThunk = async (url: string, user: User, thunkAPI: any) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data as any;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const updateUserThunk = async (url: string, user: User, thunkAPI: any) => {
    try {
        const resp = await customFetch.patch(url, user);
        return resp.data as any;
    } catch (error: any) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};

export const clearStoreThunk = async (message: string, thunkAPI: any) => {
    try {
        thunkAPI.dispatch(logoutUser(message));
        thunkAPI.dispatch(clearAllTransactionsState());
        thunkAPI.dispatch(clearValues());
        return Promise.resolve();
    } catch (error: any) {
        return Promise.reject();
    }
};
