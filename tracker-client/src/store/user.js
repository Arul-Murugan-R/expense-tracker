import { createSlice } from "@reduxjs/toolkit";
import { transactionAction } from "./transaction";

const initialState = {
  name: null,
  email: null,
  savings: 0,
  budget: {},
  monthlyIncome: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkState(state, action) {
      console.log(localStorage.getItem("token"));
      // state = localStorage.getItem('token').user
      // return {...state}
    },
    setUser(state, action) {
      const { token, user } = action.payload;
      localStorage.setItem("userId", user._id);
      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", true);
      state = user;
      return state;
    },
    removeUser(state, action) {
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn")
      return initialState;
    },
  },
});



export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;

export const verifyToken = () => {
  return async (dispatch) => {
    const verifier = async () => {
      try{
      const token = localStorage.getItem("token");
      const response = await fetch(import.meta.env.VITE_BACKEND + "/auth/verify", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({token})
      })
      if(!response.ok){
        throw new Error(response.message)
      }
      const result = await response.json()
      await dispatch(transactionAction.setTransaction({transaction:result.transactions}))
      await dispatch(userActions.setUser({token,user:result.user}));
    }
    catch (error) {
      console.log(error)
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("isLoggedIn")
        return initialState;
    }
    };

    const verificationResult = await verifier();
  };
};
