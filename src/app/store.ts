import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../features/transaction/transactionSlice';
import usersReducer from '../features/user/userSlice';

const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        users: usersReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
