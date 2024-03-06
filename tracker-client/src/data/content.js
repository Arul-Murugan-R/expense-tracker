export const budgetList = [
    {
      image:'icons/travel.png',
      category:'Travel',
      percentage:'15',
      price:'1500',
      color:'yellow',
      background:'bg-yellow-400',
      text:'text-yellow-500',
      border:'border-yellow-500'
    },
    {
      image:'icons/education.png',
      category:'Education',
      percentage:'15',
      price:'1500',
      color:'blue',
      background:'bg-blue-400',
      text:'text-blue-500',
      border:'border-blue-500'
    },
    {
      image:'icons/entertainment.png',
      category:'Entertainment',
      percentage:'15',
      price:'1500',
      color:'purple',
      background:'bg-purple-400',
      text:'text-purple-500',
      border:'border-purple-500'
    },
    {
      image:'icons/food.png',
      category:'Food',
      percentage:'15',
      price:'1500',
      color:'green',
      background:'bg-green-400',
      text:'text-green-500',
      border:'border-green-500'
    },
    {
      image:'icons/health.png',
      category:'Health',
      percentage:'15',
      price:'1500',
      color:'orange',
      background:'bg-orange-400',
      text:'text-orange-500',
      border:'border-orange-500'
    },
    {
      image:'icons/shopping.png',
      category:'Shopping',
      percentage:'15',
      price:'1500',
      color:'pink',
      background:'bg-pink-400',
      text:'text-pink-500',
      border:'border-pink-500'
    },
    {
      image:'icons/others.png',
      category:'Others',
      percentage:'10',
      price:'1000',
      color:'gray',
      background:'bg-gray-400',
      text:'text-gray-500',
      border:'border-gray-500'
    },
  ]

  export const initialSav = {
    others:0,
    travel:0,
    education:0,
    entertainment:0,
    expense:0,
    health:0,
    food:0,
    shopping:0,
    salary:0
  }

  export const budMod = {
    
    "travel":{
      image:'icons/travel.png',
      category:'Travel',
      percentage:'15',
      price:'1500',
      color:'yellow',
      background:'bg-yellow-400',
      text:'text-yellow-500',
      border:'border-yellow-500'
    },
    "education":{
      image:'icons/education.png',
      category:'Education',
      percentage:'15',
      price:'1500',
      color:'blue',
      background:'bg-blue-400',
      text:'text-blue-500',
      border:'border-blue-500'
    },
    "entertainment":{
      image:'icons/entertainment.png',
      category:'Entertainment',
      percentage:'15',
      price:'1500',
      color:'purple',
      background:'bg-purple-400',
      text:'text-purple-500',
      border:'border-purple-500'
    },
    "food":{
      image:'icons/food.png',
      category:'Food',
      percentage:'15',
      price:'1500',
      color:'green',
      background:'bg-green-400',
      text:'text-green-500',
      border:'border-green-500'
    },
    "health":{
      image:'icons/health.png',
      category:'HealthCare',
      percentage:'15',
      price:'1500',
      color:'orange',
      background:'bg-orange-400',
      text:'text-orange-500',
      border:'border-orange-500'
    },
    "shopping":{
      image:'icons/shopping.png',
      category:'Shopping',
      percentage:'15',
      price:'1500',
      color:'pink',
      background:'bg-pink-400',
      text:'text-pink-500',
      border:'border-pink-500'
    },
    "others":{
      image:'icons/others.png',
      category:'Others',
      percentage:'10',
      price:'1000',
      color:'gray',
      background:'bg-gray-400',
      text:'text-gray-500',
      border:'border-gray-500'
    },
  } 

  export const sortTransactionsByDate = (transactions,order = "ASC") => {
    return transactions.reduce((sortedTransactions, currentTransaction) => {
      const transactionDate = new Date(currentTransaction.dateOfTransaction);
      let inserted = false;
  
      for (let i = 0; i < sortedTransactions.length; i++) {
        const sortedTransactionDate = new Date(sortedTransactions[i].dateOfTransaction);
        if (order == "ASC" && transactionDate < sortedTransactionDate) {
          sortedTransactions.splice(i, 0, currentTransaction);
          inserted = true;
          break;
        }
        else if(order == "DEC" && transactionDate > sortedTransactionDate) {
          sortedTransactions.splice(i, 0, currentTransaction);
          inserted = true;
          break;
        }
      }
  
      if (!inserted) {
        sortedTransactions.push(currentTransaction);
      }
  
      return sortedTransactions;
    }, []);
  };

  export const filterTransactionsByMonth = (transactions, year = new Date().getFullYear(), month = new Date().getMonth()) => {
    console.log(year,month)
    return transactions.filter(transaction => {
      const transactionDate = new Date(transaction.dateOfTransaction);
      console.log(transactionDate.getMonth(),month)
      // console.log(transactionDate.getFullYear() == year && transactionDate.getMonth() == month)
      return transactionDate.getFullYear() === year && transactionDate.getMonth()  === month;
    });
 };

 export const sortSpent = (spent)=>{
  const topFourKeys = Object.entries(spent)
  .filter(([key]) => key !== 'salary' && key !== 'expense')
  .reduce((result, [key, value]) => {
    // Only consider the top four keys with the highest values
    if (Object.keys(result).length < 4) {
      result[key] = value;
    }
    return result;
  }, {});

  // console.log(topFourKeys);
  return topFourKeys
 }

 export const sort = (spent) =>{
  const filteredData = Object.entries(spent)
  .filter(([key]) => key !== 'income' && key !== 'expense');

// Sort the array in descending order based on values
  const sortedData = filteredData.sort((a, b) => b[1] - a[1]);
  const topFourKeysSet = new Set(sortedData);
  console.log(topFourKeysSet)
 }