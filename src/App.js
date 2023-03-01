import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import FramerTest from "./Home/FramerTest";
import MiddleNavbar from "./Home/MiddleNavbar";
import AboutUs from './About/AboutUs';
import Contact from './Contact/Contact';
import Product from './Product/Product';
import Footer from './Shared/Footer';


function App() {
  return (
    <div className="bg-white">
      <FramerTest />
      <MiddleNavbar />
      <Navbar />
      <Routes></Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/> }/>
        <Route path="/contact" element={<Contact/> }/>
        <Route path="/product" element={<Product/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
