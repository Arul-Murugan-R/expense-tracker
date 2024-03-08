import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { SnackActions } from '../../store/SnackStore';
import { transactionAction } from '../../store/transaction';
const backendUrl = import.meta.env.VITE_BACKEND;

let initialState = {
  category:"",
  purpose:'',
  amount:0,
  dateOfTransaction:'',
  description:''
}

export default function AddExpense() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()
  const [isLoading,setIsLoading] = useState(false)
  const transaction = useSelector((state)=>state.transaction).find((rec)=>rec._id==id)
  const [expenseData,setData] = useState(initialState)
  useEffect(()=>{
    if(id)
    setData(transaction)
  },[id])
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setData({ ...expenseData, 
      [name]: e.target.attributes[0].value === "number" ? +value : value,
    })
}
const onSubmitHandler = async (e) =>{
    e.preventDefault()
    setIsLoading("submit")
    fetch(backendUrl + '/transaction/add-expense', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization":"bearer "+localStorage.getItem("token")
      },
      body: JSON.stringify({...expenseData,id})
  }).then(async (res) => {
      // console.log(res)
      if(!res.ok){
        const result = await res.json()
        throw new Error(result.message)
      }
      const data = await res.json();
      // console.log(data,'1');
      if(!id)
      {
        dispatch(transactionAction.addTransaction({transaction:data.transaction}))
        dispatch(SnackActions.setSnack({title:'Expense Status',message:'New Expense Added!!'}))
      }
      else
      {
        dispatch(transactionAction.editTransaction({transaction:data.transaction}))
        dispatch(SnackActions.setSnack({title:'Expense Edited',message:'Modified Expense Successfully!!'}))
      }
      navigate('/activities')
      setIsLoading(false);
      setData(initialState);
  }).catch((err) => {
      // console.log(err)
      dispatch(SnackActions.setSnack({title:'Error Occurred',message:err.message}))
      setIsLoading(false)
  })
}
const onRemoveHandler = (e) =>{
  e.preventDefault()
  setIsLoading("remove")
  fetch(backendUrl + '/transaction/remove', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization":"bearer "+localStorage.getItem("token")
      },
      body: JSON.stringify({id})
  }).then(async (res) => {
    // console.log(res)
    if(!res.ok){
      throw new Error("something went wrong")
    }
      const data = await res.json();
      // console.log(data, '1');
      dispatch(transactionAction.deleteTransaction({id}))
      navigate('/activities')
      dispatch(SnackActions.setSnack({ title: 'Expense Status', message: 'Removed from the list!!' }));
      setData(initialState);
      setIsLoading(false);
  }).catch((err) => {
      // console.log(err,'3')
      setIsLoading(false)
  })

}
  return (
    <div className="p-3 py-3" id="addExpense">
            {/* <h1 className='border border-red-400 text-red-400 text-center text-lg p-2'>
              {`Purpose is to be of length >= 0`}
            </h1> */}
            <h2 className="text-white text-2xl font-extrabold">Add Expense</h2>
            <div className="text-white mt-5" >
                <div className="mb-4 sm:mb-6">
                    <label  className="block mb-1 text-md font-medium ">Purpose <label className="text-extrabold text-lg text-red-600">*</label></label>
                    <input type="text" autoComplete='off' name="purpose" onChange={(e)=>{onChangeHandler(e)}} value={expenseData.purpose} className="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500" placeholder="Reason for the expense"/>
                     {/* <p className="mt-2 text-sm text-green-500"><span className="font-medium">Well done!</span> Some success message.</p>  */}
                  </div>
                <div className="mb-4 sm:mb-6 inline-block lg:w-96 w-full">
                <label htmlFor="category" className="block mb-1 text-md font-medium">Select an Category <label className="text-extrabold text-lg text-red-600">*</label></label>
                  <select id="category" name="category" onChange={(e)=>{onChangeHandler(e)}} value={expenseData.category} className="w-full outline-none text-md rounded-lg block p-2.5 bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500">
                    <option selected value="">Select</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="education">Education</option>
                    <option value="health">Health Care</option>
                    <option value="shopping">Shopping</option>
                    <option value="travel">Travel</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="mb-4 sm:mb-6 inline-block lg:w-auto w-full lg:ml-5">
                  <label  className="block mb-1 text-md font-medium">Amount <label className="text-extrabold text-lg text-red-600">*</label></label>
                   {/* bg-green-50 border-green-500 text-green-900 text-green-400 placeholder-green-700 placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-green-500  */}
                  <input type="number" name="amount" onChange={(e)=>{onChangeHandler(e)}} value={expenseData.amount||''} min={0} className="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="₹2000"/>
                   {/* <p className="mt-2 text-sm text-green-500"><span className="font-medium">Well done!</span> Some success message.</p>  */}
                </div>
                <div className="mb-4 sm:mb-6">  
                <label  className="block mb-1 text-md font-medium">On which date the expense occured <label className="text-extrabold text-lg text-red-600">*</label></label>
                  <div className="relative max-w-sm">
                    <input  type="date" name="dateOfTransaction" onChange={(e)=>{onChangeHandler(e)}} value={expenseData.dateOfTransaction} className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                  </div>
                </div>
                <div className="mb-4 sm:mb-6">
                    <label htmlFor="description" className="block mb-1 text-md font-medium text-gray-900 dark:text-white">Add Description</label>
                    <textarea id="description" name="description" value={expenseData.description} onChange={(e)=>{onChangeHandler(e)}} rows="4" className="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a note for your expense">
                      
                    </textarea>
                </div>
                <div className='flex gap-5'>
                <button onClick={(e)=>onSubmitHandler(e)} className="flex place-items-center justify-center gap-3 p-3 rounded-lg bg-transparent border border-yellow-500 text-yellow-400 w-64">
                {isLoading=="submit" &&<div>
                  <svg class="w-8 h-8 animate-spin text-transparent fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
              </div>}
                  Submit</button>

                  {id&&<button onClick={(e)=>onRemoveHandler(e)} className="flex place-items-center justify-center gap-3 p-3 rounded-lg bg-red-500 text-white w-64">
                  {isLoading=="remove" &&<div>
                  <svg class="w-8 h-8 animate-spin text-transparent fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
              </div>}
                  Remove</button>}
                </div>


            </div>
        </div>
  )
}
