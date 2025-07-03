import { useContext } from "react";
import Banner from "./Home/Banner";
import Features from "./Home/Features";
import Trending from "./Home/Trending";
import MostPlayed from "./Home/MostPlayed";
import Categories from "./Home/Categories";
import Cta from "./Home/Cta";
import Allcomponents from "./Components/Allcomponents";
import Footer from "./Components/Footer";
import { CartProvider } from "react-use-cart";
// import { apiValue } from "./Data/AllData";


function App() {
  // To use Data in Api 
  // const data = useContext(apiValue);
  return (
    <CartProvider Name="App">
      <Allcomponents/>
      <Banner/>
      <Features/>
      <Trending/>
      <MostPlayed/>
      <Categories/>
      <Cta/>
      <Footer/>
    </CartProvider>
  );
}

export default App;
