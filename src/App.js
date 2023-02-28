import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';


function App() {
  return (
    <div>
      <Navbar/>
   <Routes>
   
   </Routes>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
 
    </div>
  );
}

export default App;
