import './App.scss';
import {  Routes, Route } from "react-router-dom";
// import Navbar from "./components/Nav/Navbar";
import Layout from './components/layout/Index';
// import Home from './components/home/Index';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />} />
    {/* <Route index element={<Home />} /> */}
    </Routes>

   
    
    </>
  );
}

export default App;
