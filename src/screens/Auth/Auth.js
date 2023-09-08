import React from 'react'
import "./Auth.css"
import Auth_box from '../../components/Auth_box/Auth_box'
import Footer from '../../components/Footer/Footer'
function LogIn(props) {
  const type=props.props
  return (
    <>
    <div className='Login'>
        <Auth_box props={type}/>
    </div>
    <Footer/>
    </>
    
  )
}

export default LogIn