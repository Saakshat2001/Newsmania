import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Header from "./Components/Header.jsx";

function App() {


  return (
    <div className="bg-customPurple min-h-screen"> 
    <BrowserRouter>
    <Header />
     <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App