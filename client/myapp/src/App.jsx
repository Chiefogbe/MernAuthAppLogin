import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import UserContext from './context/UserContext'
import Dashboard from './pages/Dashboard'

axios.defaults.baseURL='http://localhost:5000'
axios.defaults.withCredentials=true

const App = () => {
  return (
    <div>
      <UserContext>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
     </UserContext>
    </div>
  )
}

export default App
