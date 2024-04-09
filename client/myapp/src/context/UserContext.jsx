import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

export const UserContextProvider=createContext({})
const UserContext = ({children}) => {
  const[user, setUser]=useState(null)

  useEffect(()=>{
    if(!user){
      axios.get('/profile').then(({data})=>{
        setUser(data)
      })
    }
  }, [])
  return (
    <div>
      <UserContextProvider.Provider value={{user, setUser}}>
        {children}
      </UserContextProvider.Provider>
    </div>
  )
}  

export default UserContext
