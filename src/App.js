import "./App.css";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NoPage from "./pages/404/404";
import Profile from "./pages/profile/profile";
import Home from "./pages/home/home";
import Drinks from "./pages/drinks/drinks";
import Payment from "./pages/payment/payment";
import React from "react";
import LoadingScreen from "./components/LoadingScreen";
import ShoppingCart from "./pages/shop/shop";
import data from "./data";
import Product from "./pages/drinks/product";
import UserForm from "./pages/home/userform";
import Header from "./components/header";





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
      localStorage.setItem('cartItems', JSON.stringify(setCartItems));
    } else {
      // if it does not exist in the cart we have to add it and when it is the first time added it is one
      setCartItems([...cartItems, { ...product, qty: 1 }])
      // add the products to local storage so they are not lost after refresh
      localStorage.setItem('cartItems', JSON.stringify(setCartItems));
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      // With filter we return a boolean value
      // if the item is not similar with product id it returns true so we leave it on the basket, 
      // otherwise we remove them
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      localStorage.setItem('cartItems', JSON.stringify(setCartItems));
    } else {
      // the same ass the add function but -1
      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
      localStorage.setItem('cartItems', JSON.stringify(setCartItems));
    }
  };
  // getting the products from localStorage and make them a string and load them on page
  // useEffect(() => {
  //   setCartItems(
  //     localStorage.getItem('cartItems')
  //       ? JSON.parse(localStorage.getItem('cartItems'))
  //       : []
  //   );
  // }, []);

  return (
    <div className="App">
      <LoadingScreen delay={1000} />
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path="/userform" element={<UserForm GetDataValue={GetData} />} />
          <Route path="/" element={<><Navigation /><Header /></>}>
            <Route path="header" element={<Header />} />
            <Route path="drinks" element={<Drinks products={products} onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />} />
            {/* <Route path="Bars" element={<Bars />} /> */}
            <Route path="shop" element={
              <ShoppingCart countCartItems={cartItems.length} cartItems={cartItems}
                onAdd={onAdd} onRemove={onRemove} />} />

            <Route path="/payment" element={<Payment />} />
            {/* I'm not sure how to implement the product that needs to be used by the drink.js */}
            <Route path="/Product" element={<Product cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/profile" element={<Profile query={query} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
