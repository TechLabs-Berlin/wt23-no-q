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


function App() {
  return (
    <div className="App">
      <LoadingScreen delay={1000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="userform" element={<Userform />} />
            <Route path="drinks" element={<Drinks />} />
            {/* <Route path="Bars" element={<Bars />} /> */}
            <Route path="shop" element={<ShoppingCart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
