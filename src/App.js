import './App.css';
import React from 'react';
// import Header from './header/Header.js';
// import MenuMobile from './menuMobile/MenuMobile.js';
import Basket from './cart_empty/Basket.js';
import Basket_full from './cart_with_goods/Basket_full.js';
// import TermsService from './terms_of_service/TermsService.js';
import Contact from './contacts/Contact.js';
import Home from './home/Home.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Layout from './Layout.jsx';
function App() {
  return (
    <div>
      {/* <Router> */}

      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/empty" element={<Basket />} />
          <Route path="/basket" element={<Basket_full />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
