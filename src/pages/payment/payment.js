import React from "react";
import PaymentForm from "../../components/paymentform/paymentform";
import "../../components/paymentform/paymentform.css";
import { useLocation } from "react-router-dom";

function Payment() {
  const itemsPrice = localStorage.getItem("itemsPrice");

  // Convert itemsPrice from string to number (if needed)
  const parsedItemsPrice = parseFloat(itemsPrice);

  const link = "https://www.paypal.com/de/signin";

  return (
    <>
      <a href={link} className="payPal">
        Pay with Paypal
      </a>
      <div>Your total is:${parsedItemsPrice}</div>
      <PaymentForm />
    </>
  );
}

export default Payment;
