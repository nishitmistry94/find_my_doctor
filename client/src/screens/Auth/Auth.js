import React from 'react'
import "./Auth.css"
import Footer from '../../components/Footer/Footer'
import Doctor_details from '../../components/Doctor_details/Doctor_details'
import UserContextProvider from '../../UserContextProvider'
import Auth_route from '../../routes/Auth_route'
function LogIn(props) {
  const type=props.props
  return (
    <>
    {
      type== "Doctor"?(
        <div className='Login'>
        <Doctor_details/>
        </div>
      ):(
        <div className='Login'>
          <UserContextProvider>
            <Auth_route props={type}/>
          </UserContextProvider>
        </div>
      )
    }
    
    <Footer/>
    </>
    
  )
}

export default LogIn