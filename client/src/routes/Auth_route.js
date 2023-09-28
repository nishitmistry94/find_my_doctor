import React, { useContext } from 'react'
import Auth_box from '../components/Auth_box/Auth_box'
import { useNavigate} from 'react-router-dom'
import { UserContext } from '../UserContextProvider'
function Auth_route(props) {
    const navigate = useNavigate();
    const type=props.props
    const {loginStatus}=useContext(UserContext)
    if(loginStatus){
        navigate("/profile",{replace:true})
        return(<></>)
    }
  return (
    <Auth_box props={type}/>
  )
}

export default Auth_route