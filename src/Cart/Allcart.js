import React from "react";
import Allcomponents from "../Components/Allcomponents";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "../Components/Footer";

import { CartProvider } from "react-use-cart";

function Allcart() {
  return (
    <CartProvider>
      <Allcomponents />
      <Header />
      <Cart />
      <Footer/>
    </CartProvider>
  );
}

export default Allcart;
