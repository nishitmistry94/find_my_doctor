import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
      <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
