import React from 'react';
import AddExpense from './AddExpense';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function AddTransaction () {
    const path = useLocation().pathname
  return (
    <div>
      {/* <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select the type of transaction</label>
        <select
          id="tabs"
          class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-slate-100 focus:border-slate-100"
        >
          <option>Expense</option>
          <option>Income</option>
          <option>Split</option>
        </select>
      </div> */}
      <ul class="border border-gray-700 text-sm font-medium text-center rounded-lg shadow flex divide-gray-700 text-gray-400 min-w-[400px]">
        <li class="w-full focus-within:z-10">
          <Link to="/add/expense"
            class={`inline-block w-full p-2 border-r border-gray-700 rounded-s-lg focus:ring-4 active focus:outline-none text-white bg-gray-${path=='/add/expense'?"700":"800"}`}
          >
            Expense
          </Link>
        </li>
        <li class="w-full focus-within:z-10">
          <Link to="/add/income"
            class={`inline-block w-full p-2 border-r border-gray-700 focus:ring-4 focus:outline-none hover:text-white bg-gray-${path=='/add/income'?"700":"800"} hover:bg-gray-700`}
          >
            Income
          </Link>
        </li>
        <li class="w-full focus-within:z-10">
          <Link to="/add/split"
            class={`inline-block w-full p-2 border-r border-gray-700 rounded-r-lg focus:ring-4 focus:outline-none hover:text-white bg-gray-${path=='/add/split'?"700":"800"} hover:bg-gray-700`}
          >
            Split
          </Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}
