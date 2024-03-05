import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux'
import moment from 'moment'
import { budMod } from '../data/content';

export default function Activities () {
  const navigate = useNavigate();
  const [filter,setFilter] = useState({
    category:'',
    mode:'',
    date:''
  })
  const transactions = useSelector((state)=>state.transaction)
  const groupedTransactions = transactions.reduce((groups, transaction) => {
    const date = transaction.dateOfTransaction;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});
  const onChangeHandler = (e) =>{

  }

  return (
    <div className="lg:flex text-white gap-10">
      <div className="lg:w-[500px] mb-10">
        <h2 className="text-2xl text-extrabold text-yellow-500 mb-3">
          Available Filters
        </h2>
        <div className="lg:mb-5 mb-3">
          <label for="category">Category</label>
          <select
            id="category"
            className="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected>On what category</option>
            <option value="1">Food</option>
            <option value="2">Entertainment</option>
            <option value="3">Education</option>
            <option value="4">Health Care</option>
            <option value="5">Shopping</option>
            <option value="6">Travel</option>
            <option value="7">Others</option>
          </select>
        </div>
        <div className="lg:mb-5 mb-3">
          <label for="mode">Transaction Mode</label>
          <select
            id="mode"
            className="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Expense</option>
            <option>Income</option>
          </select>
        </div>
        <div className="mb-6">  
            <label  className="block mb-1 text-md font-medium">On which date</label>
          <div className="relative max-w-sm">
            <input  type="date" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
        </div>
      </div>
      <button
            className="button m-0 p-2 px-6 text-sm"
            // cursor-not-allowed
            // onClick={() => navigate ('/add/expense')}
          >
            Filter
          </button>
      </div>
      <div className="text-white grid gap-5 w-full h-full">
        <h2 className="text-2xl text-extrabold">Activities</h2>
        <div className="flex justify-between py-2">
          <label className="text-lg">Transaction</label>
          <button
            className="button m-0 p-2 text-xs"
            onClick={() => navigate ('/add/expense')}
          >
            Add Transaction
          </button>
        </div>
        {transactions.length >0 ? Object.keys(groupedTransactions).map((key)=>{
          return <div key={key}>
            <h1 className="text-sm text-gray-500">{moment(key).format("Do MMM YYYY")}</h1>
            <ul>
              {groupedTransactions[key].map((record,index)=>{
                if(record.category!="salary"){
                return(
                  <li className="activity-link relative" key={index}>
                <img
                  className={`h-8 w-8 p-1 rounded-full ${budMod[record.category].background}`}
                  src={`${budMod[record.category].image}`}
                  alt=""
                />
                <div>
                  <label className={`"text-sm border ${budMod[record.category].border} rounded-md px-2 ${budMod[record.category].text}`}>
                    {record.category}
                  </label>
                  <p className="text-sm">{record.purpose}</p>
                </div>
                <div className="flex absolute end-3 gap-3">
                  <p className={`text-red-500`}>- ₹{record.amount}</p>
                  {/* <p className="text-green-500">-$122.00</p> */}
                  <img 
                  onClick={()=>navigate('/add/expense/'+record._id)}
                  className="h-6 cursor-pointer" src="/icons/edit.png" alt="" />
                </div>
              </li>
                )
                }else{
                  return <li className="activity-link relative" key={index}>
                <img
                  className={`h-8 w-8 p-1 rounded-full bg-green-200`}
                  src={`/icons/money.png`}
                  alt=""
                />
                <div>
                  <label className={`"text-sm border border-green-200 rounded-md px-2 text-green-200`}>
                    {record.category}
                  </label>
                  <p className="text-sm">{record.purpose}</p>
                </div>
                <div className="flex absolute end-3 gap-3">
                  <p className={`text-green-500`}>+ ₹{record.amount}</p>
                  {/* <p className="text-green-500">-$122.00</p> */}
                  <img 
                  onClick={()=>navigate('/add/income/'+record._id)}
                  className="h-6 cursor-pointer" src="/icons/edit.png" alt="" />
                </div>
              </li>
                }
              })}
              
            </ul>
          </div>

        }):
        <div className='text-center'>
          Transaction is Empty
        </div>
        }
      </div>

    </div>
  );
}
