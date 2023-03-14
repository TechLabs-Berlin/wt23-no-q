import "./App.css";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/404/404"
import Profile from "./pages/profile/profile"
import Home from "./pages/home/home"
import Drinks from "./pages/drinks/drinks";
// import Bars from "./pages/bars/bars";
import Userform from "./pages/home/userform";
import Payment from "./pages/payment/payment";
import React from "react";
import LoadingScreen from "./components/LoadingScreen";
import ShoppingCart from "./pages/shop/shop";
import data from "./data";
import Product from "./pages/drinks/product";


function App() {
  // in order to import the data of drinks
  const { products } = data;
  return (
    <div className="App">
      <LoadingScreen delay={1000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="userform" element={<Userform />} />
            {/* here in the drink page it's inserted the data we imported */}
            <Route path="drinks" element={<Drinks products={products} />} />
            {/* <Route path="Bars" element={<Bars />} /> */}
            <Route path="shop" element={<ShoppingCart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
            {/* I'm not sure how to implement the product that needs to be used by the drink.js */}
            <Route path="/Product" element={<Product />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
