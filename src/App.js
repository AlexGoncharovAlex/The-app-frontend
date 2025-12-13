import logo from "./logo.svg";
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Footer from './components/Footer'
function App() {
  return (<>
      <Router>
        {/* <Header/> */}
        <Routes>
          {/* <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} /> */}
        
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}
export default App;
