import React from 'react';
import {Link} from 'react-router-dom';

export default function Login () {
  return (
    <form className="max-w-sm mx-auto mt-32 text-white">
      <Link to="/" className="text-md">{`< Home`}</Link>
      <div className="mb-5">
        <label for="email" className="block mb-2 text-sm font-medium ">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
          placeholder="user@gmail.com"
          required
        />
      </div>
      <div className="mb-5">
        <label for="password" className="block mb-2 text-sm font-medium ">
          Your password
        </label>
        <div className="relative max-w-sm">
        <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 cursor-pointer z-1"
            >
            <svg
            onClick={(e)=>{
              showPass(e)
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
            type="password"
            id="password"
            className="shadow-sm outline-none z-0 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Register new account
      </button>
    </form>
  );
}
