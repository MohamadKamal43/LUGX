import React from 'react'
import Allcomponents from '../Components/Allcomponents'
import Header from './Header'
import Shop from './Shop'
import Footer from "../Components/Footer";

import { CartProvider } from 'react-use-cart'

function Allshop() {
  return (
    <CartProvider>
        <Allcomponents/>
        <Header/>
        <Shop/>
        <Footer/>
    </CartProvider>
  )
}

export default Allshop