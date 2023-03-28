import "./App.css";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NoPage from "./pages/404/404";
import Profile from "./pages/profile/profile";
import Home from "./pages/home/home";
import Drinks from "./pages/drinks/drinks";
// import Bars from "./pages/bars/bars";

import Payment from "./pages/payment/payment";
import React from "react";
import LoadingScreen from "./components/LoadingScreen";
import ShoppingCart from "./pages/shop/shop";
import data from "./data";
import Product from "./pages/drinks/product";
import UserForm from "./pages/home/userform";
import Form from "./pages/home/Form";
import UserLoggedIn from "./pages/home/userlogin";




function App() {
  const GetData = (param) => {
    console.log(param, "receiving data");
  }
  // when user get's in the queue and log in
  const [query, setQuery] = useState("");
  // in order to import the data of drinks
  const { products } = data;
  // in order to change items in cart we need the useState to update
  const [cartItems, setCartItems] = useState([]);
  // use history to redirect in home page
  const onAdd = (product) => {
    // exist is a variable that check cart items and try to find an item that its id is equal to product id. 
    const exist = cartItems.find((x) => x.id === product.id);
    // then we have to update the quantity in it
    if (exist) {
      // if it exists we will add one in the quantity ({...exist, qty: exist.qty + 1 }) 
      // otherwise we'll keep it as it is (:x)
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
    } else {
      // if it does not exist in the cart we have to add it and when it is the first time added it is one
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      // With filter we return a boolean value
      // if the item is not similar with product id it returns true so we leave it on the basket, 
      // otherwise we remove them
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      // the same ass the add function but -1
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  };

  return (
    <div className="App">
      <LoadingScreen delay={1000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="Form" element={<Form />} />
            <Route path="/userform" element={<UserForm GetDataValue={GetData} />} />
            <Route path="drinks" element={<Drinks products={products} onAdd={onAdd} />} />
            {/* <Route path="Bars" element={<Bars />} /> */}
            <Route path="shop" element={<ShoppingCart countCartItems={cartItems.length} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
            <Route path="/profile" element={<Profile query={query} />} />
            <Route path="/payment" element={<Payment />} />
            {/* I'm not sure how to implement the product that needs to be used by the drink.js */}
            <Route path="/Product" element={<Product cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
