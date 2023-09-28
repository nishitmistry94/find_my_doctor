import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const UserContext=createContext({})

function UserContextProvider({children}) {
  const [email,setEmail]=useState("")
  const [id,setId]=useState("")
  const [loginStatus,setLoginStatus]=useState(false)
  useEffect(()=>{
    axios.get("/verify_token").then((response)=>{
      setId(response.data.UserId)
      setEmail(response.data.email)
      setLoginStatus(true)
    }).catch((err)=>{

      console.log(err)
    })
  })
  return (
    <UserContext.Provider value={{email,setEmail,id,setId,loginStatus,setLoginStatus}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider