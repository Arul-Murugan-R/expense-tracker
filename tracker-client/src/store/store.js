import { configureStore } from '@reduxjs/toolkit';
import { transactionReducer } from './transaction';
import { userReducer } from './user';
import { SnackReducers } from './SnackStore';

const store = configureStore({
    reducer:{
        transaction:transactionReducer,
        user:userReducer,
        snack:SnackReducers
    }
});

export default store;
