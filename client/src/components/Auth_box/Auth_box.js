import React, { useContext, useState } from 'react'
import "./Auth_box.css"
import img1 from "../../assets/7.jpeg"
import img2 from "../../assets/8.jpeg"
import MediaQuery from 'react-responsive'
import { Link, useNavigate} from 'react-router-dom'
import axios from "axios"
import { UserContext } from '../../UserContextProvider'
function Auth_box(props) {
    const navigate = useNavigate();
    const authType = props.props
    const {setEmail,setId,setLoginStatus}=useContext(UserContext)
    const [pass2,setpass2]=useState('')
    const [formData, setFormData] = useState({});
    const [errorMsg,setErrorMsg]=useState("")

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        e.target.classList.remove("red_border")
        setErrorMsg("")
        setFormData({ ...formData, [name]: value });
    };
    const emailRegex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const passwordRegex= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const submitAuthForm = (e) => {
        e.preventDefault()
        if(!(emailRegex.test(formData.email))){
            setErrorMsg("Email not valid")
            return
        }
        
        if(authType == "Sign up" && formData.doc_check == "on"){
            
            navigate("/doctor_details",{replace:true})
            return
        }
        if (authType == "Login") {
            axios.post("/process_login",formData).then((response)=>{
                if(response.data.MESSAGE==="Password not correct")
                {
                    document.getElementById("password").classList.add("red_border")
                    setErrorMsg(response.data.MESSAGE)
                }
                else if(response.data.MESSAGE==="User not found"){
                    document.getElementById("email").classList.add("red_border")
                    setErrorMsg(response.data.MESSAGE)
                }
                else{
                    setId(response.data.id)
                    setEmail(formData.email)
                    setLoginStatus(true)
                }
                console.log(response);
            }).catch((err)=>{
                console.log(err);
            })
        }
        else if(authType=="Sign up") {
            console.log(pass2)
            console.log(formData.password)
            if(formData.password!=pass2){
                setErrorMsg("Passwords do not match")
                return
            }
            if( !(passwordRegex.test(formData.password))){
                setErrorMsg("Enter a strong password")
                return
            }
            axios.post("/register_patient",formData).then((response)=>{
                setId(response.data.id)
                setEmail(formData.email)
                setLoginStatus(true)
                console.log(response);
            }).catch((err)=>{
                console.log(err);
            })
        }
    }

    return (
        <div className='authMain'>
            <div className='sideImage'>
                <MediaQuery minWidth={1024}>
                    <img src={authType == "Login" ? (img1) : (img2)}>
                    </img>
                </MediaQuery>
            </div>
            <div className="authForm">
                <div className='formHeader'>
                    {authType}
                </div>
                <p>
                    Enter your details to {authType.toLowerCase()}
                </p>

                <form onSubmit={submitAuthForm} >
                    <input type='email' placeholder='Enter your email'
                        name='email'
                        id='email'
                        value={formData.fieldName}
                        onChange={handleInputChange}>
                    </input>
                    <input type='password' placeholder='Enter your password'
                        name='password'
                        id='password'
                        value={formData.fieldName}
                        onChange={handleInputChange} >
                    </input>
                    {
                        authType != "Login" ?
                            (<>
                                <input type='password' placeholder='Confirm your password'
                                 onChange={(e)=>{setpass2(e.target.value)}}>
                                </input>
                                
                                <label htmlFor="doc_check" >
                                    <input type="checkbox" id="doc_check" name='doc_check'
                                        onChange={handleInputChange}
                                        style={{ position: "relative", top: 2, marginRight: 5 }}></input>
                                    Are you a doctor ?
                                </label>
                            </>
                            ) : <></>
                    }

                    <Link style={{ textDecoration: "none" }}>
                        <div className='trouble_link'>
                            Having trouble {authType == "Login" ? ("logging in") : ("signing up")}
                        </div>
                    </Link>
                    <div className='error_text'>
                        {errorMsg}
                    </div>
                    <button className="submit">{authType}</button>
                </form>
                <div className='acc_link' onClick={() => { }}>
                    {authType == "Login" ?
                        (<Link style={{ textDecoration: "none" }} to="/signup">
                            <div style={{ color: "#49535a" }} >
                                Don't have an account
                            </div>
                        </Link>)
                        :
                        (<Link style={{ textDecoration: "none" }} to="/login">
                            <div style={{ color: "#49535a" }} >
                                Already have an account
                            </div>
                        </Link>)}
                </div>
            </div>
        </div>
    )
}

export default Auth_box