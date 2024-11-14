import { useState } from 'react'
import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Shop from '../pages/Shop'
import ShopCategory from '../pages/ShopCategory'
import Product from '../pages/Product'
import LoginSignup from '../pages/LoginSignup'
import Cart from '../pages/Cart'
import Footer from './Footer/Footer'


import women_banner from "./Assets/banner_women.png"
import men_banner from "./Assets/banner_mens.png"
import kids_banner from "./Assets/banner_kids.png"




function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      
      <Routes>

        <Route path='/E-commerce-website-deployed' element={<Shop/>}/>
      
      <Route path='/men' element={<ShopCategory  banner ={men_banner} category="men" />}/>
      <Route path='/women' element={<ShopCategory banner={women_banner}  category="women" />}/>
      <Route path='/kids' element={<ShopCategory  banner={kids_banner} category="kid" />}/>
     
      <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     
     
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
