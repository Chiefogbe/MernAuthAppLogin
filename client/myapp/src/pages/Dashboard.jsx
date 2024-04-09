import React from 'react'
import { UserContextProvider } from '../context/UserContext'
import { useContext } from 'react'

const Dashboard = () => {
  const {user}=useContext(UserContextProvider)
  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && (<h2>hi {user.name}!</h2>)}
    </div>
  )
}

export default Dashboard
