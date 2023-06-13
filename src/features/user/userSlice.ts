import {
    AsyncThunk,
    createAsyncThunk,
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage
} from '../../utils/localStorage';
import {
    clearStoreThunk,
    loginUserThunk,
    registerUserThunk,
    updateUserThunk
} from './userThunk';
import { AsyncThunkConfig } from '../allTransactions/allTransactionsSlice';

export interface User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

interface UserState {
    isLoading: boolean;
    isSidebarOpen: boolean;
    user: User;
}

export const registerUser: AsyncThunk<any, any, AsyncThunkConfig> =
    createAsyncThunk('user/registerUser', async (user: User, thunkAPI: any) => {
        return registerUserThunk('auth/register', user, thunkAPI);
    });

export const loginUser: AsyncThunk<any, any, AsyncThunkConfig> =
    createAsyncThunk('user/loginUser', async (user: User, thunkAPI: any) => {
        return loginUserThunk('auth/login', user, thunkAPI);
    });

export const updateUser: AsyncThunk<any, any, AsyncThunkConfig> =
    createAsyncThunk('user/updateUser', async (user: User, thunkAPI: any) => {
        return updateUserThunk('auth/update', user, thunkAPI);
    });

const initialState: UserState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserFromLocalStorage()
};

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state, action: PayloadAction<{}>) => {
            state.user = {
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            };
            state.isSidebarOpen = false;
            toast.success('Logout Successful');
            removeUserFromLocalStorage();
            if (action.payload) {
                toast.success(action.payload as any);
            }
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                registerUser.fulfilled,
                (state, action: PayloadAction<{ user: User }>) => {
                    const { user } = action.payload;
                    state.isLoading = false;
                    state.user = user;
                    addUserToLocalStorage(user);
                    toast.success(`Hello there ${user.firstname}`);
                }
            )
            .addCase(
                registerUser.rejected,
                (state, { payload }: { payload: any }) => {
                    state.isLoading = false;
                    toast.error(payload);
                }
            );
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                loginUser.fulfilled,
                (state, action: PayloadAction<{ user: User }>) => {
                    const { user } = action.payload;
                    state.isLoading = false;
                    state.user = user;
                    addUserToLocalStorage(user);
                    toast.success(`Welcome back ${user.firstname}`);
                }
            )
            .addCase(
                loginUser.rejected,
                (state, { payload }: { payload: any }) => {
                    state.isLoading = false;
                    toast.error(payload);
                }
            );
        builder
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                updateUser.fulfilled,
                (state, action: PayloadAction<{ user: User }>) => {
                    const { user } = action.payload;
                    state.isLoading = false;
                    state.user = user;

                    addUserToLocalStorage(user);
                    toast.success('User updated!');
                }
            )
            .addCase(
                updateUser.rejected,
                (state, { payload }: { payload: any }) => {
                    state.isLoading = false;
                    toast.error(payload);
                }
            );
        builder.addCase(clearStore.rejected, () => {
            toast.error('There was an error');
        });
    }
});

export const { logoutUser, toggleSidebar } = usersSlice.actions;

export default usersSlice.reducer;
