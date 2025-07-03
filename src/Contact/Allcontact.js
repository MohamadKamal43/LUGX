import React from 'react'
import Header from './Header'
import Contact from './Contact'
import Footer from "../Components/Footer";
import Allcomponents from '../Components/Allcomponents'
import { CartProvider } from 'react-use-cart'

function Allcontact() {
  return (
    <CartProvider>
        <Allcomponents/>
        <Header/>
        <Contact/>
        <Footer/>
    </CartProvider>
  )
}

export default Allcontact