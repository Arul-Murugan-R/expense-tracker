import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransaction(state,action){
        console.log(action.payload.transaction)
        state = action.payload.transaction
        return state
    },
    addTransaction: (state, action) => {
      state.push(action.payload);
      return state
    },
    deleteTransaction: (state, action) => {
      state = state.filter(transaction => transaction.id !== action.payload);
      return state
    },
    removeTransaction(state,action){
      return {...initialState}
    }
  },
});

export const transactionAction = transactionSlice.actions;

export const transactionReducer =  transactionSlice.reducer;
