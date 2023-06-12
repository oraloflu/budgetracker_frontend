import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user: User, thunkAPI: any) => {
        return registerUserThunk('auth/register', user, thunkAPI);
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user: User, thunkAPI: any) => {
        return loginUserThunk('auth/login', user, thunkAPI);
    }
);

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user: User, thunkAPI: any) => {
        return updateUserThunk('auth/update', user, thunkAPI);
    }
);

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
        logoutUser: (state, { payload }) => {
            state.user = { firstname: '', lastname: '', email: '', password: '' };
            state.isSidebarOpen = false;
            toast.success('Logout Successful');
            removeUserFromLocalStorage();
            if (payload) {
                toast.success(payload);
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
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);
                toast.success(`Hello there ${user.firstname}`);
            })
            .addCase(registerUser.rejected, (state, { payload }: { payload: any }) => {
                state.isLoading = false;
                toast.error(payload);
            });
    }
});

export const { logoutUser } = usersSlice.actions;

export default usersSlice.reducer;
