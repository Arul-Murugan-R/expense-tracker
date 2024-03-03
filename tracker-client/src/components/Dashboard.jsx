import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom'
import { PieChart } from './UI/PieChart'
import { budgetList } from '../data/content'

export default function Dashboard() {
  return (
    <div className="p-1" id="Dashboard">
{/* <div className="sm:hidden">
    <label for="tabs" className="sr-only">Select your country</label>
    <select id="tabs" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-slate-100 focus:border-slate-100">
        <option>Profile</option>
        <option>Dashboard</option>
        <option>Invoioce</option>
    </select>
</div> */}
<ul className="text-sm font-medium text-center rounded-lg shadow flex divide-gray-700 text-gray-400 float-end min-w-[400px]">
    <li className="w-full focus-within:z-10">
        <a href="#" className="inline-block w-full p-2 border-r border-gray-700 rounded-s-lg focus:ring-4 active focus:outline-none bg-gray-700 text-white" aria-current="page">Last 7 days</a>
    </li>
    <li className="w-full focus-within:z-10">
        <a href="#" className="inline-block w-full p-2 border-r rounded-r-lg border-gray-700 focus:ring-4 focus:outline-none hover:text-white bg-gray-800 hover:bg-gray-700">Last month</a>
    </li>
</ul>
            <h2 className="text-white text-2xl font-extrabold mb-4">Welcome back, Jim!
            </h2>
            <h2 className="text-white text-2xl font-extrabold">Amount Spent
            </h2>
            <div className="cards grid grid-cols-2 gap-5 lg:grid-cols-4">
                <div className="card">
                <span><img src="/icons/party.png" alt="" /></span>
                    <h3>₹ 450/<small>1000</small></h3>
                    <p>Entertainment</p>
                </div>
                <div className="card">
                <span><img src="/icons/food.png" alt="" />
                      </span>
                    <h3>₹ 300/<small>1500</small></h3>
                    <p>Food</p>
                </div>
                <div className="card">
                <span><img src="/icons/travel.png" alt="" />
                      </span>
                    <h3>₹ 1000/<small>2500</small></h3>
                    <p>Travel</p>
                </div>
                <div className="card">
                    <span><img src="/icons/education.png" alt="" />
                      </span>
                    <h3>₹ 1200/<small>5500</small></h3>
                    <p>Education</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="card p-3 mt-3 overflow-auto inline-block">
              <h2 className="text-white text-xl font-bold">Activities
              <Link to="/activities" className='text-sm float-end text-blue-700 underline'>See all</Link>
              </h2> 
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
            <div className="card p-4 mt-3 lg:ml-3 overflow-auto inline-block">
                <h2>Category
                <a href="" className='text-sm float-end text-blue-700 underline'>See all</a>
                </h2>
            <ul className='hidden'>
              <li>
                <div className="text-base font-medium text-yellow-500">Travel</div>
                <div className="w-full rounded-full h-2.5 mb-3 bg-gray-700">
                  <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: "45%",}}></div>
                </div>
              </li>
              <li>
                <div className="text-base font-medium text-green-400">Food & Groceries</div>
                <div className="w-full rounded-full h-2.5 mb-3 bg-gray-700">
                  <div className="bg-green-400 h-2.5 rounded-full" style={{width: "45%",}}></div>
                </div>
              </li>
              <li>
                <div className="text-base font-medium text-blue-500">Education</div>
                <div className="w-full rounded-full h-2.5 mb-3 bg-gray-700">
                  <div className="bg-blue-400 h-2.5 rounded-full" style={{width: "45%",}}></div>
                </div>
              </li>
              <li>
                <div className="text-base font-medium text-orange-500">Health Care</div>
                <div className="w-full rounded-full h-2.5 mb-3 bg-gray-700">
                  <div className="bg-orange-400 h-2.5 rounded-full" style={{width: "45%",}}></div>
                </div>
              </li>
              <li>
                <div className="text-base font-medium text-purple-500">Entertainment</div>
                <div className="w-full rounded-full h-2.5 mb-3 bg-gray-700">
                  <div className="bg-purple-400 h-2.5 rounded-full" style={{width: "45%",}}></div>
                </div>
              </li>
              <li>
                <div className="text-base font-medium text-pink-500">Shopping</div>
                <div className="w-full rounded-full h-2.5 mb-3 bg-gray-700">
                  <div className="bg-pink-400 h-2.5 rounded-full" style={{width: "45%",}}></div>
                </div>
              </li>
              <li>
                <div className="text-base font-medium text-gray-500">Others</div>
                <div className="w-full rounded-full h-2.5 mb-3 bg-gray-700">
                  <div className="bg-gray-400 h-2.5 rounded-full" style={{width: "45%",}}></div>
                </div>
              </li>
            </ul>
            <PieChart/>
            </div>
            </div>
        </div>
  )
}
