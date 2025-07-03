import React from 'react'
import Header from './Header'
import Product from './Product'
import Info from './Info'
import RelatedGames from './RelatedGames'
import Footer from "../Components/Footer";
import Allcomponents from '../Components/Allcomponents'
import { CartProvider } from 'react-use-cart'

function Alldetails() {
  return (
    <CartProvider>
      <Allcomponents/>
        <Header/>
        <Product/>
        <Info/>
        <RelatedGames/>
        <Footer/>
    </CartProvider>
  )
}

export default Alldetails