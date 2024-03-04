import { configureStore } from '@reduxjs/toolkit';
import { transactionReducer } from './transaction';
import { userReducer } from './user';

const store = configureStore({
    reducer:{
        transaction:transactionReducer,
        user:userReducer
    }
});

export default store;
