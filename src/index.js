import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { AllData } from "./Data/AllData";
import "react-toastify/dist/ReactToastify.css";
import Allshop from "./Shop/Allshop";
import Alldetails from "./Details/Alldetails";
import Allcontact from "./Contact/Allcontact";
import Allcart from "./Cart/Allcart";
import { CartProvider } from "react-use-cart";
import ScrollToTop from "react-scroll-to-top";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Allshop />,
  },
  {
    path: "details",
    element: <Alldetails />,
  },
  {
    path: "contact",
    element: <Allcontact />,
  },
  {
    path: "cart",
    element: <Allcart />,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <AllData>
      <ScrollToTop
        smooth
        viewBox="0 0 384 512"
        svgPath="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        style={{
          backgroundColor: "#042b4c",
          borderRadius: "50%",
          textAlign: "center",
        }}
        color="#fff"
      />
      <RouterProvider router={router} />
    </AllData>
  </CartProvider>
);
