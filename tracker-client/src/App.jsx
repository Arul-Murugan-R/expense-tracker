import './App.css'
import Activities from './components/Activities'
import AddExpense from './components/Transactions/AddExpense'
import AddTransaction from './components/Transactions/AddTransaction'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Otp from './components/Otp'
import Signup from './components/Signup'
import SideBar from './components/UI/SideBar'
import { Routes,Route, useLocation, useNavigate } from 'react-router-dom'
import AddIncome from './components/Transactions/AddIncome'
import Today from './components/Today'
import Budget from './components/Budget'
import Home from './components/Home'
import ProtectedRoute from './ProtectedRoute'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions, verifyToken } from './store/user'
import CustomSnack from './components/UI/CustomSnack'

let initial = true

function App() {
  const dispatch = useDispatch()
  const [loading,setIsLoading] = useState(true)
  const path = useLocation().pathname
  const fetchData = async()=>{
      await dispatch(verifyToken())
      initial = false
      setIsLoading(false)
  }
  useEffect(()=>{
    if(localStorage.getItem('token'))
      fetchData()
    else
    setIsLoading(false)
  },[])
  if((path.includes('/auth') || path == '/') && localStorage.getItem("token")){
    return window.location = '/dashboard'
  } 
  if(loading){
    return <h1 className="text-white text-center text-xl">
      Loading...
    </h1>
  }


  return (
    <>
    {path!='/'&& path.indexOf('/auth')==-1&&<SideBar/>}
    <CustomSnack/>
    <Routes>
      <Route
        path='/auth/login' element={<Login/>}
      />
      <Route
        path='/auth/signup' element={<Signup/>}
      />
      <Route
        path='/auth/otp' element={<Otp/>}
      />
      <Route
        path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }
      />
      <Route
        path='/budget' element={
          <ProtectedRoute>
            <Budget/>
          </ProtectedRoute>
        }
      />
      <Route
        path='/add' element={
          <ProtectedRoute>
            <AddTransaction/>
          </ProtectedRoute>
        }
      >
        <Route
        path='expense' element={
            <AddExpense/>
        }
        />
        <Route
        path='expense/:id' element={
            <AddExpense/>
        }
        />
        <Route
        path='income' element={
            <AddIncome/>
        }
        />
        <Route
        path='income/:id' element={
            <AddIncome/>
        }
        />
        {/* <Route
        path='split' element={
            <AddExpense/>
        }
        /> */}
      </Route>
      <Route
        path='/activities' element={
          <ProtectedRoute>
            <Activities/>
          </ProtectedRoute>
        }
      />
      <Route
        path='/today' element={
          <ProtectedRoute>
            <Today/>
          </ProtectedRoute>
        }
      />
      <Route
        path='/' element={
            <Home/>
        }
      />
      <Route
        path="*" element={<center>
          <h3 className="text-white">Page Not Found</h3>
        </center>}
      />
    </Routes>
    </>
  )
}

export default App
