import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../store/user';
import { transactionAction } from '../store/transaction';
import { SnackActions } from '../store/SnackStore';

export default function Login () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading,setIsLoading] = useState(false)
  const [loginData,setData] = useState({
    email:'',
    password:''
  })
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setData({ ...loginData, [name]: value })
}
const showPass = (e) => {
  const pass = document.getElementById(e.target.id.split("id")[0]);
  //console.log(pass);
  if (pass.type == "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
};
const onSubmitHandler = (e) =>{
  e.preventDefault()
  setIsLoading(true)
  fetch(import.meta.env.VITE_BACKEND + '/auth/login', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData)
  }).then(async (res) => {
      //console.log(res,'1')
      if(!res.ok){
        const result = await res.json()
        throw new Error(result.message)
      }
      const result = await res.json()
      //console.log(result ,'login')
      dispatch(transactionAction.setTransaction({transaction:result.transactions}))
      dispatch(SnackActions.setSnack({title:'Login Status',message:'User Login successfully'}))
      dispatch(userActions.setUser({token:result.token,user:result.user}))
      setIsLoading(false)
      setData({})
      return navigate('/dashboard')
  }).catch((err) => {
      //console.log(err)
      dispatch(SnackActions.setSnack({title:'Error Occurred',message:err.message}))
      setIsLoading(false)
  })
}
  return (
    <div className="max-w-sm mx-auto mt-24 text-white sm:p-0 px-2 grid gap-3">
      <Link to="/" className="text-md">{`< Home`}</Link>
      <h2 className="text-xl">Login</h2>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium ">
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={loginData.email}
          onChange={(e)=>{onChangeHandler(e)}}
          className="shadow-sm outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
          placeholder="user@gmail.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium ">
          Your password
        </label>
        <div className="relative max-w-sm">
        <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 cursor-pointer z-1"
            >
            <svg
              onClick={(e) => {
                showPass(e);
              }}
              id="passwordid"
              className="w-6 h-6 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"
              />
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <input
            name="password"
            type="password"
            value={loginData.password}
            onChange={(e)=>{onChangeHandler(e)}}
            id="password"
            className="shadow-sm outline-none z-0 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        onClick={(e)=>onSubmitHandler(e)}
        className="flex justify-center gap-3 place-items-center text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        {isLoading&&<div role="status">
                  <svg aria-hidden="true" class="w-8 h-8 animate-spin text-transparent fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
              </div>}
        Submit
      </button>
      <h3 className="text-md text-white text-center pt-2">
        Want a new account ? <Link to="/auth/signup" className='text-blue-500 underline'>Signup</Link>
      </h3>
    </div>
  );
}
