
import React from "react";
import './shop.css';
// import { Link } from 'react-router-dom';
// import { useNavigate, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link, useNavigate } from 'react-router-dom';
import { useCartStore } from "../../useCartStore";
import { useState, useEffect } from "react";
import Payment from "../payment/payment";
import PaymentForm from "../../components/paymentform/paymentform";










export default function ShoppingCart(props) {
    // fetching data from App.js
    const { cartItems, onAdd, onRemove } = props;


    const { clearCart } = useCartStore(); // Get clearCart function from the store
    const [totalQuantity, setTotalQuantity] = useState(0); // State to keep track of total quantity
    const [getPrice, getSetPrice] = useState(0); // State to keep track of total price




    useEffect(() => {
        let quantity = 0;
        let price = 0;
        cartItems.forEach((item) => {
            quantity += item.qty;
            price += item.price * item.qty;
        });
        setTotalQuantity(quantity);
        getSetPrice(price);
    }, [cartItems]);

    // with reduce it gives back a value the value of all the elements, of list
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const totalPrice = itemsPrice;

    useEffect(() => {
        if (totalQuantity === 0) {
            getSetPrice(0); // Reset total price

        }
    }, [totalQuantity]);


    const navigate = useNavigate();

    const handleCancel = () => {
        localStorage.removeItem('cartItems');
        clearCart(); // Call the clearCart function from the store
        setTotalQuantity(0); // Reset the total quantity state
        getSetPrice(0); // Reset the total price state
        navigate('/');
    }





    return (
        <div className="block-col-1">
            <div className="basket">
                <h2>Cart Items</h2>
                <div className="components">
                    {/* display if the basket is empty */}
                    {cartItems.length === 0 && <div>Empty Basket</div>}
                </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            {/* we pass onAdd the item so it can be added in the basket */}
                            <button onClick={() => onAdd(item)} className="add">+</button>
                            <button onClick={() => onRemove(item)} className="remove">-</button>
                        </div>
                        <div>
                            {/* the display of items and  to fixed id 2 digits*/}
                            {item.qty} x ${item.price.toFixed(2)}

                        </div>
                    </div>
                ))}
                {/* in order to check that this is not empty so it will be rendered */}
                {cartItems !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">Items price</div>
                            <div className="col-1">${totalPrice.toFixed(2)}</div>

                        </div>
                        <div className="row">Wanna add a tip?</div>

                        <Link to={{ pathname: "/payment" }}>
                            <button className="navButtons">
                                Get in Q!
                            </button>
                        </Link>

                        <button onClick={handleCancel}>Cancel</button>
                    </>
                )}
            </div>
        </div>
    );
}