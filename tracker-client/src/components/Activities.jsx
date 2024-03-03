import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Activities () {
  const navigate = useNavigate ();
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
        <div>
          <h1 className="text-sm text-gray-500">17th Aug 2024</h1>
          <ul>
            <li className="activity-link relative">
              <img
                className="h-8 w-8 p-1 rounded-full bg-slate-400"
                src="/icons/travel.png"
                alt=""
              />
              <div>
                <label className="text-sm border border-orange-500 rounded-md px-2 text-orange-500">
                  Travel
                </label>
                <p className="text-sm">Long way to coorg</p>
              </div>
              <div className="flex absolute end-3 gap-3">
                <p className="text-green-500">You owe</p>
                <p className="text-green-500">-$122.00</p>
                <img className="h-6" src="/icons/edit.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
