import './App.css'
import Activities from './components/Activities'
import AddExpense from './components/Transactions/AddExpense'
import AddTransaction from './components/Transactions/AddTransaction'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Otp from './components/Otp'
import Signup from './components/Signup'
import SideBar from './components/UI/SideBar'
import { Routes,Route } from 'react-router-dom'
import AddIncome from './components/Transactions/AddIncome'
import Today from './components/Today'

function App() {
  return (
    <>
    <SideBar/>
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
          <div class="p-4 sm:ml-64">
            <Dashboard/>
          </div>
        }
      />
      <Route
        path='/addExpense' element={
          <div class="p-4 sm:ml-64">
            <AddExpense/>
          </div>
        }
      />
      <Route
        path='/add' element={
          <div class="p-4 sm:ml-64">
            <AddTransaction/>
          </div>
        }
      >
        <Route
        path='expense' element={
            <AddExpense/>
        }
        />
        <Route
        path='income' element={
            <AddIncome/>
        }
        />
        <Route
        path='split' element={
            <AddExpense/>
        }
        />
      </Route>
      <Route
        path='/activities' element={
          <div class="p-4 sm:ml-64">
            <Activities/>
          </div>
        }
      />
      <Route
        path='/today' element={
          <div class="p-4 sm:ml-64">
            <Today/>
          </div>
        }
      />
      <Route
        path="*" element={<center>
          <h3 class="text-white">Page Not Found</h3>
        </center>}
      />
    </Routes>
    </>
  )
}

export default App
