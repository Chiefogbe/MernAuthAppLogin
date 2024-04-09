import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate=useNavigate()
  const[data, setData]=useState({
    name:"",
    email:"",
    password:"",
  })

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const {name, email, password}=data
    try {
      const {data}=await axios.post('/register', {name, email,password})
      if(data.error){
        alert(data.error)
      }else{
        setData({})
        alert(`success`)
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h3>This is the register page.</h3>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' placeholder='write your name...' value={data.name} onChange={(e)=>setData({...data, name:e.target.value})} />
        <br />
        <label>Email</label>
        <input type='email' placeholder='write your email...' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
        <br />
        <label>Password</label>
        <input type='password' placeholder='write your password...' value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register
