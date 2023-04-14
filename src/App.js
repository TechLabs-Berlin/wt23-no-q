import "./App.css";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState, useTransition } from "react";
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
import { useCartStore } from "./useCartStore";
import BreakPoint from "./components/responsive_utilities/breakpoint";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider, useMediaQuery, CssBaseline } from "@mui/material";
import DrinkRating from "./components/drinkRating/drinkRating";

function App() {
  const GetData = (param) => {
    console.log(param, "receiving data");
  };

  const { products } = data;
  // in order to change items in cart we need the useState to update
  const [cartItems, setCartItems] = useState([]);
  // const navigate = useNavigate();

  const categories = ["beers", "wines", "cocktails"];

  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  // calculate total of items in localStorage
  const totalQuantity = useCartStore((state) => state.getTotalQuantity());

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      addItem(product);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      addItem(product);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      removeItem(product);
    } else {
      const newCartItems = cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
      removeItem(product);
    }
  };

  const [isPending, startTransition] = useTransition();

  // saving items in local storage
  // useTransition so it does not block while "reading" from localStorage
  useEffect(() => {
    startTransition(() => {
      setCartItems(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);
    });
  }, []);

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
    /*   spacing: {
      // Set margin and padding values for different breakpoints
      // You can set the 'marginBottom' value to 0 to remove the bottom margin
      xs: 0,
      sm: 0,
      md: 0,
      lg: 0,
      xl: 0,
    }, */
  });

  return isPending ? (
    <div>Loading...</div>
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
            <Route
              path="/"
              element={
                <>
                  <Navigation countCartItems={totalQuantity} />
                </>
              }
            >
              <Route path="/drinks" cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} element={<Drinks products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} countCartItems={totalQuantity} categories={categories} />} />
              {/* <Route path="Bars" element={<Bars />} /> */}

              <Route path="shop" countCartItems={totalQuantity} onAdd={onAdd} onRemove={onRemove} element={<ShoppingCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} countCartItems={totalQuantity} />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
            {/* I'm not sure how to implement the product that needs to be used by the drink.js */}
            <Route path="/Product" element={<Product cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
            <Route path="*" element={<NoPage />} />
            <Route path="drinkRating" element={<DrinkRating />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
