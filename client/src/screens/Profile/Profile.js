import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import UserContextProvider from '../../UserContextProvider'
function Profile() {
  return (
    <>
    <UserContextProvider>
        <Navbar/>
      </UserContextProvider>
    </>
  )
}

export default Profile