import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate=useNavigate()
  const[data, setData]=useState({
    email:"",
    password:"",
  })
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const {email, password}=data
    try {
      const {data} =await axios.post('/login', {
        email,
        password
      })
      if(data.error){
        alert(data.error)
      }else{
        setData({})
        navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h3>This is the login page.</h3>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type='email' placeholder='write your email...' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
        <br />
        <label>Password</label>
        <input type='password' placeholder='write your password...' value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
