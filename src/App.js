import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Auth from './screens/Auth/Auth';
import SignUp from './screens/SignUp/SignUp';

function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
       
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
