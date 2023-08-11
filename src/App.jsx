import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Add other components and routes here */}
    </BrowserRouter>
  );
}

export default App;
