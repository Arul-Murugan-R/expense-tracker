import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransaction(state,action){
        state = action.payload.transaction
        return state
    },
    addTransaction: (state, action) => {
      state.push(action.payload.transaction);
      return state
    },
    editTransaction: (state, action) => {
      let transaction = action.payload.transaction
      let index = state.findIndex((rec)=>rec._id == transaction._id)
      console.log(index)
      if(index == -1)
      return state
      state[index] = transaction
      return state
    },
    deleteTransaction: (state, action) => {
      state = state.filter(transaction => transaction._id !== action.payload.id);
      return state
    },
    removeTransaction(state,action){
      return {...initialState}
    }
  },
});

export const transactionAction = transactionSlice.actions;

export const transactionReducer =  transactionSlice.reducer;
