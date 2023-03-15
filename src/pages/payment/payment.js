import React from "react";
import PaymentForm from "../../components/paymentform/paymentform";
import "../../components/paymentform/paymentform.css";

function Payment() {
  const link = "https://www.paypal.com/de/signin";
  return (
    <>

      <a href={link} className="payPal">Pay with Paypal</a>
      <PaymentForm />
    </>
  );
}

export default Payment;
