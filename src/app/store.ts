import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../features/transaction/transactionSlice';
import allTransactionsReducer from '../features/allTransactions/allTransactionsSlice';
import usersReducer from '../features/user/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    transactions: transactionReducer,
    allTransactions: allTransactionsReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
// eslint-disable-next-line
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;
export type AppDispatch = typeof store.dispatch;
