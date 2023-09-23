import './App.scss';
import {  Routes, Route } from "react-router-dom";
// import Navbar from "./components/Nav/Navbar";
import Layout from './components/layout/Index';
import Home from './components/Home'
import About from './components/About/Index';


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="about" element={<About />} />
    </Route>

    </Routes>

   
    
    </>
  );
}

export default App;
