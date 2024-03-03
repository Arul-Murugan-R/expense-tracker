import React from 'react'

export default function Budget() {
  const budgetList = [
    {
      image:'icons/travel.png',
      category:'Travel',
      percentage:'',
      price:'',
      color:'yellow',
    },
    {
      image:'icons/education.png',
      category:'Education',
      percentage:'',
      price:'',
      color:'blue',
    },
    {
      image:'icons/entertainment.png',
      category:'Entertainment',
      percentage:'',
      price:'',
      color:'purple',
    },
    {
      image:'icons/food.png',
      category:'Food',
      percentage:'',
      price:'',
      color:'green',
    },
    {
      image:'icons/health.png',
      category:'Health Care',
      percentage:'',
      price:'',
      color:'orange',
    },
    {
      image:'icons/shopping.png',
      category:'Shopping',
      percentage:'',
      price:'',
      color:'pink',
    },
    {
      image:'icons/.png',
      category:'Others',
      percentage:'',
      price:'',
      color:'gray',
    },
  ]

  return (
    <div className="lg:flex text-white gap-10">
        <div className='card lg:w-[500px] mb-10'>
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

        </div>
        <div className="text-white grid gap-2 w-full h-full">
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
                    className="h-8 w-8 p-1 rounded-full bg-slate-400"
                    src="/icons/travel.png"
                    alt=""
                  />
                  <div>
                    <label className={`text-sm border border-orange-500 rounded-md px-2 text-orange-500`}>
                      {cat.category}
                    </label>
                  </div>
                  <div className="flex absolute end-3 gap-3">
                    <p>{cat.percentage}%</p>
                    <p>${cat.price}</p>
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
