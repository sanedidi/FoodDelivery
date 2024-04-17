import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Branches from '../Pages/Branches';
import AboutUs from '../Pages/AboutUs';
import Contacts from '../Pages/Contacts';
import Basket from '../ExtraPages/Basket';
import Products from '../components/Products/Products';
import Cart from '../Pages/Cart';
import Profile from '../ExtraPages/Profile';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='branches' element={<Branches />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='contact' element={<Contacts />} />
        <Route path='/basket/:id' element={<Basket />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<Products />} />
        <Route path='/profile' element={<Profile />} /> 
      </Routes>
    </>
  );
};

export default Router;
