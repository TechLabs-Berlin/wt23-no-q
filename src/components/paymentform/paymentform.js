import React from "react";
import "./paymentform.css";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

function PaymentForm() {
  const { state } = useLocation();
  const totalAmount = state?.totalAmount ?? 0;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    // Submit the form data to the server
    console.log("Form submitted:", data);
  }

  return (
    <div className="payment-form">
      <h1 className="pay-title">Payment Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register("name", { required: true })} />
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
          {errors.cardNumber && errors.cardNumber.type === "required" && <div className="error-message">Card number is required</div>}
          {errors.cardNumber && errors.cardNumber.type === "pattern" && <div className="error-message">Card number must be 16 digits</div>}
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
          {errors.expirationDate && errors.expirationDate.type === "required" && <div className="error-message">Expiration date is required</div>}
          {errors.expirationDate && errors.expirationDate.type === "pattern" && <div className="error-message">Expiration date must be in the format MM/YYYY</div>}
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
          {errors.cvv && errors.cvv.type === "required" && <div className="error-message">CVV is required</div>}
          {errors.cvv && errors.cvv.type === "pattern" && <div className="error-message">CVV must be 3 digits</div>}
        </div>
        <div className="form-row">
          {/* Display the total amount */}
          <div className="form-row total-amount">
            <span>Total Amount: €{totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PaymentForm;
