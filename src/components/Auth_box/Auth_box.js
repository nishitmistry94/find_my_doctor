import React from 'react'
import "./auth_box.css"
import img1 from "../../assets/7.jpeg"
import img2 from "../../assets/8.jpeg"
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
function Login_box(props) {
    const auth_type=props.props
  return (
    <div className='main'>
        <div className='sideImage'> 
        <MediaQuery minWidth={1024}>
                <img src={auth_type=="Login" ?(img1):(img2)}>
                </img>
        </MediaQuery>
            </div>
        <div className="form">
            <div className='formHeader'>
                {auth_type}
            </div>
            <p>
                Enter your details to {auth_type.toLowerCase()}
            </p>

            <form action={auth_type=="Login"?("/process_login"):("/process_signup")} method='post'>
                <input type='text' placeholder='Enter your email'>
                </input>
                <input type='password' placeholder='Enter your password'>
                </input>
                {
                    auth_type!="Login"?
                    (<input type='password' placeholder='Confirm your password'>
                    </input>):<></>
                }
                <Link style={{textDecoration:"none"}}>
                    <div className='trouble_link'>
                        Having trouble {auth_type=="Login"?("logging in"):("signing up")}
                    </div>
                </Link>
                <button class="submit">{auth_type}</button>
            </form>
            <div className='acc_link' onClick={()=>{}}>
                {auth_type=="Login"?
                    (<Link style={{textDecoration:"none"}} to="/signup">
                        <div style={{color: "#49535a"}} >
                            Don't have an account
                        </div>
                    </Link>)
                    :
                    (<Link style={{textDecoration:"none"}} to="/login">
                        <div style={{color: "#49535a"}} >
                            Already have an account
                        </div>
                    </Link>)}
            </div>
        </div>
    </div>
  )
}

export default Login_box