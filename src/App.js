import "./App.css";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDeferredValue, useEffect, useState, useTransition } from "react";
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
import { useCartItems } from "./useDataStore";
import BreakPoint from "./components/responsive_utilities/breakpoint";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider, useMediaQuery, CssBaseline } from "@mui/material";
// import Queue from "./pages/queue/queue";
// import { useCart } from "./store";
// import { useCart } from "./useCart";
// import { useCart } from "./storedrinks";






function App() {
  const GetData = (param) => {
    console.log(param, "receiving data");
  }

  // GET from Local storage
  // const newCartItems = useCartItems(state => state.newCartItems);
  // when user get's in the queue and log in
  const [query, setQuery] = useState("");
  // in order to import the data of drinks
  const { products } = data;
  // in order to change items in cart we need the useState to update
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = (cartItems.filter((x) => x.id !== product.id));
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } else {
      const newCartItems = (cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      ));
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }
  };




  // // useEffect(() => {
  // //   newCartItems(cartItems)
  // // });

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setCartItems
        (localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems')) : []);
    });

  }, []);

  // // it does not have high prority
  // const cartItemsCount = useDeferredValue(cartItems.length);
  // // console.log(cartItemsCount);

  const cartItemsCount = cartItems.length;


  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 400,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });


  return isPending ? (<div>Loading...</div>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BreakPoint />
      <div className="App">
        <LoadingScreen delay={1000} />
        <BrowserRouter>
          <Routes>

            <Route index element={<Home />} />
            <Route path="/userform" element={<UserForm GetDataValue={GetData} />} />
            <Route path="/" element={<><Navigation countCartItems={cartItems.length} /></>}>

              <Route path="/drinks" cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} element={<Drinks products={products} onAdd={onAdd} onRemove={onRemove}
                cartItems={cartItems} countCartItems={cartItems.length} />} />
              {/* <Route path="Bars" element={<Bars />} /> */}
              <Route path="shop" countCartItems={cartItemsCount} onAdd={onAdd} onRemove={onRemove} element={
                <ShoppingCart cartItems={cartItems}
                  onAdd={onAdd} onRemove={onRemove} />} />

            </Route>
            <Route path="/profile" element={<Profile query={query} />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
