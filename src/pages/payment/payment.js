import React from "react";
import PaymentForm from "../../components/paymentform/paymentform";
import "../../components/paymentform/paymentform.css";
import { useLocation } from 'react-router-dom';

function Payment() {
  const link = "https://www.paypal.com/de/signin";



  return (
    <>

      <a href={link} className="payPal">Pay with Paypal</a>
      <div>Your total is: <p></p></div>
      <PaymentForm />
    </>
  );
}

export default Payment;
