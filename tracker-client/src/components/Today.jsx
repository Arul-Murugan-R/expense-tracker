import React from 'react'

export default function Today() {
  return (
    <div className=''>
    <div className='max-w-[500px] text-white grid gap-5'>
        <h2 className="text-2xl text-extrabold">Today Activities</h2>
        <div className='bg-slate-700 p-3'>
          <h6 className="text-2xl text-bold text-yellow-500">
            Amount Spent
          </h6>
          <h3 className="text-xl text-bold">
            $4000.00
          </h3>
        </div>
        <div className='flex justify-between py-2'>
          <h2 className="text-lg">Transaction</h2>
          <button className="button m-0 p-2 text-xs" 
              onClick={()=>navigate('/add/expense')}
          >
            Add Transaction
          </button>
        </div>
        <div>
          <h1 className="text-sm text-gray-500">17th Aug 2024</h1>
          <ul>
                <li className='activity-link relative'>
                  <img className='h-8 w-8 p-1 rounded-full bg-slate-400' src="/icons/travel.png" alt="" />
                  <div>
                    <label className='text-sm border border-orange-500 rounded-md px-2 text-orange-500'>Travel</label>
                    <p className='text-sm w-40'>Long way to coorg vcdshjgds hgjhg jhfu gf</p>
                  </div>
                  <p className="text-red-500">You owe</p>
                  <p className="text-red-500">-$122.00</p>
                <img className='sm:absolute sm:end-3 h-6' src="/icons/edit.png" alt="" />
                </li>
                <li className='activity-link relative'>
                  <img className='h-8 w-8 p-1 rounded-full bg-slate-400' src="/icons/travel.png" alt="" />
                  <div>
                    <label className='text-sm border border-orange-500 rounded-md px-2 text-orange-500'>Travel</label>
                    <p className='text-sm'>Long way to coorg</p>
                  </div>
                  <p className="text-green-500">You owe</p>
                  <p className="text-green-500">-$122.00</p>
                <img className='absolute end-3 h-6' src="/icons/edit.png" alt="" />
                </li>
                <li className='activity-link relative'>
                  <img className='h-8 w-8 p-1 rounded-full bg-slate-400' src="/icons/travel.png" alt="" />
                  <div>
                    <label className='text-sm border border-orange-500 rounded-md px-2 text-orange-500'>Travel</label>
                    <p className='text-sm'>Long way to coorg vcdshjgds</p>
                  </div>
                  <p className="text-red-500">You owe</p>
                  <p className="text-red-500">-$122.00</p>
                <img className='h-6' src="/icons/edit.png" alt="" />
                </li>
                <li className='activity-link relative'>
                  <img className='h-8 w-8 p-1 rounded-full bg-slate-400' src="/icons/travel.png" alt="" />
                  <div>
                    <label className='text-sm border border-orange-500 rounded-md px-2 text-orange-500'>Travel</label>
                    <p className='text-sm'>Long way to coorg</p>
                  </div>
                  <p className="text-green-500">You owe</p>
                  <p className="text-green-500">-$122.00</p>
                <img className='absolute end-4 h-6' src="/icons/edit.png" alt="" />
                </li>
          </ul>
        </div>
    </div>
    
    </div>
  )
}
