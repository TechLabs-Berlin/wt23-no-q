import React, { useState } from "react";
import "./shop.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TipButtonGroup from "./tip";

export default function ShoppingCart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const [tipAmount, setTipAmount] = useState({ type: "percentage", value: 0 });
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const tipPrice = tipAmount.type === "percentage" ? itemsPrice * tipAmount.value : tipAmount.value;
  const totalPrice = itemsPrice + tipPrice;
  const navigate = useNavigate();

  const handleCancel = () => {
    localStorage.removeItem("cartItems");
    navigate("/");
  };

  const handleTipChange = (tip) => {
    setTipAmount(tip);
  };

  return (
    <div className="block-col-1">
      <div className="basket">
        <h2>Cart Items</h2>
        <div className="components">{cartItems.length === 0 && <div>Empty Basket</div>}</div>
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>
            <div>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length > 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col-2">Items price</div>
              <div className="col-1">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tip</div>
              <div className="col-1">
                <TipButtonGroup onTipChange={handleTipChange} currency="EUR" />
              </div>
            </div>
            <div className="row">
              <div className="col-2">Total price</div>
              <div className="col-1">${totalPrice.toFixed(2)}</div>
            </div>
            <div className="row buttons-container">
              <Link to={{ pathname: "/payment", state: { totalAmount: totalPrice } }}>
                <button className="navButtons">Get in Q!</button>
              </Link>

              <button onClick={handleCancel}>Cancel!</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
