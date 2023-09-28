import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Auth from './screens/Auth/Auth';
import axios from 'axios';
import Profile from './screens/Profile/Profile';
function App() {
  axios.defaults.baseURL="http://localhost:8000/"
  axios.defaults.withCredentials=true
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Auth props={"Login"}/>}></Route>
        <Route path='/signup' element={<Auth props={"Sign up"}/>}></Route>
        <Route path="/doctor_details" element={<Auth props={"Doctor"}/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
