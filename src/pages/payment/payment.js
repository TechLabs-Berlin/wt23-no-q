import React from "react";
import PaymentForm from "../../components/paymentform/paymentform";

function Payment() {
  const link = "https://www.paypal.com/de/signin";
  return (
    <>
      <h1>Payment Page</h1>
      <a href={link}>Pay with Paypal</a>
      <PaymentForm />
    </>
  );
}

export default Payment;
import React from "react";
import PaymentForm from "../../components/paymentform/paymentform";

function Payment() {
  const link = "https://www.paypal.com/de/signin";
  return (
    <>
      <h1>Payment Page</h1>
      <a href={link}>Pay with Paypal</a>
      <PaymentForm />
    </>
  );
}

export default Payment;
