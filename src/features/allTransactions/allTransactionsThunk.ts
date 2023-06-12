import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';

export const getAllTransactionsThunk = async (_: any, thunkAPI: any) => {
    const { page, search, searchCategory, sort } =
        thunkAPI.getState().allTransactions;

    let url = `/transaction?page=${page}&searchCategory=${searchCategory}&sort=${sort}`;

    if (search) {
        url = url + `?search=${search}`;
    }

    try {
        const resp = await customFetch.get(url);
        return resp.data as any;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};

export const showStatsThunk = async (_: any, thunkAPI: any) => {
    try {
        const resp = await customFetch.get('/transaction/stats');
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};
