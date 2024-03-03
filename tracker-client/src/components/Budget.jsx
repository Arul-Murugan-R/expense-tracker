import React from 'react'
import { budgetList } from '../data/content'

export default function Budget() {
  

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
        <div class="mb-3 inline-block lg:w-full">
                  <label  class="block mb-1 text-md font-medium">Budget Percentage</label>
                   {/* bg-green-50 border-green-500 text-green-900 text-green-400 placeholder-green-700 placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-green-500  */}
                  <input type="number" class="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15%"/>
                   {/* <p class="mt-2 text-sm text-green-500"><span class="font-medium">Well done!</span> Some success message.</p>  */}
        </div>
        <div className='text-md text-red-500 mb-3'>Note : The sum of percentage of budget list to be less than are equal to 100%</div>
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
            Monthly Income
          </h6>
          <h3 className="text-xl text-bold">
            ₹10000.00
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
                <img className="h-6" src="/icons/edit.png" alt="" />
              </div>
            </li>
            {budgetList.map((cat,index)=>{
              return (<li className="activity-link relative">
                  <img
                    className={`h-8 w-8 p-1 rounded-full bg-${cat.color}-500`}
                    src={cat.image}
                    alt=""
                  />
                  <div>
                    <label className={`text-sm border border-${cat.color}-500 rounded-md px-2 text-${cat.color}-500`}>
                      {cat.category}
                    </label>
                  </div>
                  <div className="flex absolute end-3 gap-3">
                    <p>{cat.percentage}%</p>
                    <p>₹{cat.price}</p>
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
