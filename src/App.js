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
import { useCartStore } from "./useCartStore";
import BreakPoint from "./components/responsive_utilities/breakpoint";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider, useMediaQuery, CssBaseline } from "@mui/material";






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

  const addItem = useCartStore(state => state.addItem);
  const removeItem = useCartStore(state => state.removeItem);
  // calculate total of items in localStorage
  const totalQuantity = useCartStore((state) => state.getTotalQuantity());


  // passing cancelation
  const [totalitems, setTotalitems] = useState(0); // State to keep track of total quantity
  const { clearCart } = useCartStore(); // Get clearCart function from the store





  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      addItem(product);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      addItem(product);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = (cartItems.filter((x) => x.id !== product.id));
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      removeItem(product);
    } else {
      const newCartItems = (cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      ));
      setCartItems(newCartItems);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      removeItem(product);
    }
  };


  // ADDING CANCELLATION----------------------------------------
  // Update total quantity whenever cartItems prop changes
  useEffect(() => {
    let quantity = 0;
    cartItems.forEach((item) => {
      quantity += item.quantity;
    });
    setTotalitems(quantity);
  }, [cartItems]);

  const handleCancel = () => {
    //  
    localStorage.removeItem('cartItems');
    //   
    clearCart(); // Call the clearCart function from the store
    //   
    setTotalitems(0); // Reset the total quantity state
    // Clear the cart items displayed on the app
    setCartItems([]); // Update cartItems state to an empty array
  }
  // --------------------------------------------------------------------------




  const [isPending, startTransition] = useTransition();

  // saving items in local storage
  // useTransition so it does not block while "reading" from localStorage
  useEffect(() => {
    startTransition(() => {
      setCartItems
        (localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems')) : []);
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
            <Route path="/" element={<><Navigation countCartItems={totalQuantity} /></>}>

              <Route path="/drinks" cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}
                element={<Drinks products={products} onAdd={onAdd} onRemove={onRemove}
                  cartItems={cartItems} countCartItems={totalQuantity} />} />
              {/* <Route path="Bars" element={<Bars />} /> */}
              <Route path="shop" countCartItems={totalQuantity} onAdd={onAdd} onRemove={onRemove} element={
                <ShoppingCart cartItems={cartItems}
                  onAdd={onAdd} onRemove={onRemove} countCartItems={totalQuantity} />} />

            </Route>
            <Route path="/profile" element={<Profile query={query} />} />
            <Route path="/payment" element={<Payment />} />
            {/* I'm not sure how to implement the product that needs to be used by the drink.js */}
            <Route path="/Product" element={<Product cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
