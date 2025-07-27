import React from "react";
import Allcomponents from "../Components/Allcomponents";
import Cart from "./Cart";
import Header from "./Header";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

import { CartProvider } from "react-use-cart";

function Allcart() {
  return (
    <CartProvider>
      <Allcomponents />
      <Header />
      <Cart />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </CartProvider>
  );
}

export default Allcart;
