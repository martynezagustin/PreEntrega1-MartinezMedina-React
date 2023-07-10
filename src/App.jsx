/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './style.css';
import NavBar from './components/NavBar.jsx';
import Home from './pages/home'
import ProductDetail from './pages/products-detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>

      <NavBar nombre="Urban Diamond Beats" />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:productId' element={<ProductDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App