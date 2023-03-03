/* import React, { useState } from "react";
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
old code*/

import React from "react";
import "./paymentform.css";
import { useForm } from "react-hook-form";

function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // Submit the form data to the server
    console.log("Form submitted:", data);
  }

  return (
    <div className="payment-form">
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && <div className="error-message">Name is required</div>}
        </div>
        <div className="form-row">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            {...register("cardNumber", {
              required: true,
              pattern: /^[0-9]{16}$/,
            })}
          />
          {errors.cardNumber && errors.cardNumber.type === "required" && (
            <div className="error-message">Card number is required</div>
          )}
          {errors.cardNumber && errors.cardNumber.type === "pattern" && (
            <div className="error-message">Card number must be 16 digits</div>
          )}
        </div>
        <div className="form-row">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            {...register("expirationDate", {
              required: true,
              pattern: /^(0[1-9]|1[0-2])\/([0-9]{4})$/,
            })}
          />
          {errors.expirationDate &&
            errors.expirationDate.type === "required" && (
              <div className="error-message">Expiration date is required</div>
            )}
          {errors.expirationDate &&
            errors.expirationDate.type === "pattern" && (
              <div className="error-message">
                Expiration date must be in the format MM/YYYY
              </div>
            )}
        </div>
        <div className="form-row">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            {...register("cvv", {
              required: true,
              pattern: /^[0-9]{3}$/,
            })}
          />
          {errors.cvv && errors.cvv.type === "required" && (
            <div className="error-message">CVV is required</div>
          )}
          {errors.cvv && errors.cvv.type === "pattern" && (
            <div className="error-message">CVV must be 3 digits</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PaymentForm;
