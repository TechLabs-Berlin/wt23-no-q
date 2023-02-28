/* ffc keyboard command vs sfc */
/* 
function Payment() {
  const link = "https://www.paypal.com/de/signin";
  return (
    <>
      <h1>Payment Page</h1>
      <a href={link}>Pay with Paypal</a>
    </>
  );
}

export default Payment;
 */

import React, { useState } from "react";
import "./paymentform.css";

function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Make HTTP request to backend endpoint to process payment
    fetch("/process-payment", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        cardNumber,
        expiration,
        securityCode,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setPaymentStatus("success");
        } else {
          setPaymentStatus("failed");
        }
      })
      .catch((error) => {
        console.error(error);
        setPaymentStatus("error");
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />
      </label>
      <label>
        Expiration:
        <input
          type="text"
          value={expiration}
          onChange={(event) => setExpiration(event.target.value)}
        />
      </label>
      <label>
        Security Code:
        <input
          type="text"
          value={securityCode}
          onChange={(event) => setSecurityCode(event.target.value)}
        />
      </label>

      <button type="submit">Pay Now</button>
      {paymentStatus === "success" && <p>Payment successful!</p>}
      {paymentStatus === "failed" && <p>Payment failed. Please try again.</p>}
      {paymentStatus === "error" && (
        <p>Something went wrong. Please try again later.</p>
      )}
    </form>
  );
}

export default PaymentForm;

//second code//
