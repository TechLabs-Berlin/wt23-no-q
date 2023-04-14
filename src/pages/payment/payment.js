import React, { useEffect, useState } from "react";
import PaymentForm from "../../components/paymentform/paymentform";
import "../../components/paymentform/paymentform.css";
import { useLocation } from "react-router-dom";

function Payment() {
  const itemsPrice = parseFloat(localStorage.getItem("itemsPrice"));
  const totalPriceFromStorage = parseFloat(localStorage.getItem("totalPrice"));
  const location = useLocation();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (location.state && location.state.totalPrice) {
      setTotalPrice(location.state.totalPrice);
    } else if (totalPriceFromStorage) {
      setTotalPrice(totalPriceFromStorage);
    } else {
      setTotalPrice(itemsPrice);
    }
  }, [location, itemsPrice, totalPriceFromStorage]);

  const link = "https://www.paypal.com/de/signin";

  return (
    <>
      <a href={link} className="payPal">
        Pay with Paypal
      </a>
      <div>Your total is: €{totalPrice.toFixed(2)}</div>
      <PaymentForm />
    </>
  );
}

export default Payment;
