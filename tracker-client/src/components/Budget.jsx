import React, { useEffect, useState } from 'react'
import { budgetList, initialSav } from '../data/content'
import {useSelector} from 'react-redux'

export default function Budget() {
  const user = useSelector((state)=>state.user)
  const [income,setIncome] = useState(0)
  let transactions = useSelector((state)=>state.transaction)
  const filterTransactionsByMonth = (transactions, year = new Date().getFullYear(), month = new Date().getMonth()) => {
    let amount = 0 
    transactions.filter(transaction => {
      const transactionDate = new Date(transaction.dateOfTransaction);
      if(transactionDate.getFullYear() === year && transactionDate.getMonth() === month && transaction.category == "salary"){
          amount += parseInt(transaction.amount)
      }
    });
    // console.log(amount)
    setIncome(amount)
    };
 useEffect(()=>{
  if(transactions!=[])
   filterTransactionsByMonth(transactions)
 },[transactions])

  return (
    <div className="lg:flex text-white gap-10">
        <div className='card lg:w-[500px] mb-10 lg:max-h-[350px]'>
        <div className="lg:mb-5 mb-3">
          <label for="category">Category</label>
          <select
            id="category"
            className="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected>On what category</option>
            <option value="1">Food & Grocery</option>
            <option value="2">Entertainment</option>
            <option value="3">Education</option>
            <option value="4">Health Care</option>
            <option value="5">Shopping</option>
            <option value="6">Travel</option>
            <option value="7">Others</option>
          </select>
        </div>
        <div className="mb-3 inline-block lg:w-full">
                  <label  className="block mb-1 text-md font-medium">Budget Percentage</label>
                   {/* bg-green-50 border-green-500 text-green-900 text-green-400 placeholder-green-700 placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-green-500  */}
                  <input type="number" className="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15%"/>
                   {/* <p className="mt-2 text-sm text-green-500"><span className="font-medium">Well done!</span> Some success message.</p>  */}
        </div>
        <div className='text-md text-red-500 mb-3'>Note : The sum of percentage of budget list to be less than or equal to 100%</div>
        <div>
          <button
            className="button m-0 p-2 text-sm "
            // cursor-not-allowed
            // onClick={() => navigate ('/add/expense')}
          >
            Set Budget
          </button>
          
        </div>
        </div>

        <div className="text-white grid gap-2 w-full h-full">
        <div className='bg-slate-700 p-3'>
          <h6 className="text-2xl text-bold text-yellow-500">
            Month Income
          </h6>
          <h3 className="text-xl text-bold">
            ₹{income}
          </h3>
        </div>
        <h2 className="text-2xl text-extrabold">Budget on income</h2>
        <div>
          <ul>
          <li className="activity-link relative">
              <div>
                <label className="text-sm border border-orange-500 rounded-md px-2 text-orange-500">
                  Category
                </label>
              </div>
              <div className="flex absolute end-3 gap-3">
                <p>Percentage</p>
                <p>Price</p>
                {/* <img className="h-6" src="/icons/edit.png" alt="" /> */}
              </div>
            </li>
            {budgetList.map((cat,index)=>{
              return (<li className="activity-link relative" key={index}>
                  <img
                    className={`h-8 w-8 p-1 rounded-full ${cat.background}`}
                    src={cat.image}
                    alt=""
                  />
                  <div>
                    <label className={`text-sm border rounded-md px-2 ${cat.text} ${cat.border}`}>
                      {cat.category}
                    </label>
                  </div>
                  <div className="flex absolute end-3 gap-3">
                    <p>{user.budget[cat.category.toLowerCase()]}%</p>
                    <p>₹{(user.budget[cat.category.toLowerCase()] / 100)*income}</p>
                    <img className="h-6" src="/icons/edit.png" alt="" />
                  </div>
                </li>)

            })}
            
          </ul>
        </div>
      </div>
    </div>
  )
}
