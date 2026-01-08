import './App.css';
import React from 'react';
import Layout from './Layout.jsx';
import Home from './home/Home.js';
import Basket from './cart_empty/Basket.js';
import Basket_full from './cart_with_goods/Basket_full.js';
import Contact from './contacts/Contact.js';
import TermsService from './terms_of_service/TermsService.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Router> */}

      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/empty" element={<Basket />} />
          <Route path="/basket" element={<Basket_full />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms_of_service" element={<TermsService />} />
        </Route>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
