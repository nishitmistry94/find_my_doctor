import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Auth from './screens/Auth/Auth';
function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Auth props={"Login"}/>}></Route>
        <Route path='/signup' element={<Auth props={"Sign up"}/>}></Route>
       
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
