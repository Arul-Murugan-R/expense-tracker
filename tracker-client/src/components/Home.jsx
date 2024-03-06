import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('isLoggedIn')){
      navigate('/dashboard')
    }
  },[])
  return (
    <div>
      <section className="w-full px-8 text-white bg-gray-900">
    <div className="container flex justify-between py-5">
        <a href="#_" className="flex items-center mb-5 font-medium text-slate-100 lg:w-auto lg:items-center lg:justify-center md:mb-0">
            <span className="mx-auto text-xl font-black leading-none text-slate-100 select-none">Expense Tracker<span className="text-indigo-600">.</span></span>
        </a>

        <div className="flex sm:items-center ml-5 sm:space-x-6 sm:justify-end">
            <NavLink to="/auth/login" className="md:text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                Login
            </NavLink>
            <NavLink to="/auth/signup" className="sm:flex hidden items-center justify-center p-1 md:px-4 md:py-2 md:text-base md:font-medium leading-6 text-white whitespace-no-wrap bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                Sign up
            </NavLink>
        </div>
    </div>
</section>

{/* <!-- Section 2 --> */}
<section className="px-2 sm:py-32 py-10 text-white md:px-0">
  <div className="container items-center max-w-6xl p-2 sm:px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Boost Expense Tracking</span>
            <span className="block text-yellow-500 xl:inline"> Efficiency with this Tools!</span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Assist users in managing their finances effectively.</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <Link to="/auth/signup" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-yellow-500 rounded-md sm:mb-0 hover:bg-yellow-700 sm:w-auto">
              Try It Free
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
            <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/>
          </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
