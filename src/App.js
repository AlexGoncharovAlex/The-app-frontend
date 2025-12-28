import './App.css';
import React from 'react';
import Header from './header/Header.js';
// import MenuMobile from './menuMobile/MenuMobile.js';
// import Basket from './cart_empty/Basket.js';
import Basket_full from './cart_with_goods/Basket_full.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Basket_full />
        {/* <Basket /> */}
        {/* <Header /> */}
        {/* <MenuMobile /> */}
        {/* <Home /> */}
        {/* home это верхняя часть главной стр с логотипом */}
        {/* <Routes> */}
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/basket" element={<Basket />} /> */}
        {/* <Route path="/basket" element={<BasketF />} /> */}
        {/* </Routes> */}
      </Router>
    </div>
  );
}

export default App;
