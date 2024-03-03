import React from 'react'

export default function AddExpense() {
  return (
    <div class="p-3 py-3" id="addExpense">
            <h2 class="text-white text-2xl font-extrabold">Add Expense</h2>
            <form class="text-white mt-5">
                <div class="mb-6">
                    <label  class="block mb-1 text-md font-medium ">Purpose</label>
                    <input type="text" class="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500" placeholder="Reason for the expense"/>
                     {/* <p class="mt-2 text-sm text-green-500"><span class="font-medium">Well done!</span> Some success message.</p>  */}
                  </div>
                <div class="mb-6 inline-block">
                <label for="category" class="block mb-1 text-md font-medium">Select an option</label>
                  <select id="category" class="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 focus:ring-blue-500 focus:border-blue-500">
                    <option selected>On what category do u spent the money</option>
                    <option value="1">Food</option>
                    <option value="2">Entertainment</option>
                    <option value="3">Education</option>
                    <option value="4">Health Care</option>
                    <option value="5">Shopping</option>
                    <option value="6">Travel</option>
                    <option value="7">Others</option>
                  </select>
                </div>
                <div class="mb-6 inline-block lg:ml-5">
                  <label  class="block mb-1 text-md font-medium">Amount</label>
                   {/* bg-green-50 border-green-500 text-green-900 text-green-400 placeholder-green-700 placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 bg-gray-700 border-green-500  */}
                  <input type="number" class="outline-none text-md rounded-lg block w-full p-2.5 bg-gray-700 border border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="₹2000"/>
                   {/* <p class="mt-2 text-sm text-green-500"><span class="font-medium">Well done!</span> Some success message.</p>  */}
                </div>
                <div className="mb-6">  
                <label  class="block mb-1 text-md font-medium">On which date the expense occured</label>
                  <div class="relative max-w-sm">
                    {/* <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                    </div> */}
                    <input  type="date" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
                  </div>
                </div>
                <div className="mb-6">
                    <label for="description" class="block mb-1 text-md font-medium text-gray-900 dark:text-white">Add Description</label>
                    <textarea id="description" rows="4" class="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a note for your expense"></textarea>
                </div>
                <button class="p-3 rounded-lg bg-transparent border border-yellow-500 text-yellow-400 w-64">Submit</button>

            </form>
        </div>
  )
}
