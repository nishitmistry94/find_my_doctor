import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import LogIn from './screens/LogIn/LogIn';
import SignUp from './screens/SignUp/SignUp';

function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
