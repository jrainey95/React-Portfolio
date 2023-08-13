import './App.scss';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Layout from './components/layout/Index';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Layout />} />
    </Routes>

   
    
    </>
  );
}

export default App;
