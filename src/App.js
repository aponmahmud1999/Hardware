import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import FramerTest from "./Home/FramerTest";
import MiddleNavbar from "./Home/MiddleNavbar";

function App() {
  return (
    <div className="bg-white">
      <FramerTest />
      <MiddleNavbar />
      <Navbar />
      <Routes></Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
