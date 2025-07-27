import React from "react";
import Allcomponents from "../Components/Allcomponents";
import Header from "./Header";
import Shop from "./Shop";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

import { CartProvider } from "react-use-cart";

function Allshop() {
  return (
    <CartProvider>
      <Allcomponents />
      <Header />
      <Shop />
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

export default Allshop;
