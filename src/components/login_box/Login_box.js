import React from 'react'
import "./Login_box.css"
import img1 from "../../assets/7.jpeg"
import img2 from "../../assets/8.jpeg"
import MediaQuery from 'react-responsive'
function Login_box() {
    const auth_type="Login"

  return (
    <div className='main'>
        <div className='sideImage'> 
        <MediaQuery minWidth={1024}>
                <img src={img1}>
                </img>
        </MediaQuery>
            </div>
        <div className="form">
            <div className='formHeader'>
                Patient {auth_type}
            </div>
            <p>
                Enter your details to {auth_type}
            </p>

            <form action='' method='post'>
                <input type='text' placeholder='Enter your email'>
                </input>
                <input type='password' placeholder='Enter your password'>
                </input>
                <button class="submit">{auth_type}</button>
            </form>
        </div>
    </div>
  )
}

export default Login_box