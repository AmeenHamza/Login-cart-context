import React, { useState, useContext } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import { cartContext } from './context/Context';
import Logout from './components/Logout';

export const App = () => {

  const { user } = useContext(cartContext);

  return (

    <BrowserRouter>
      <Header />
      <Routes>
        {
          user ? (
            <>
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Login />} />
            </>
          )
        }
      </Routes>
    </BrowserRouter>

  )
}
