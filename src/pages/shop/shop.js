// import { Badge } from "@mui/material";
import React from "react";
import './shop.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCartStore } from "../../useCartStore";
import { useEffect, useState } from "react";
import { useData, useUser } from "../../useData";







export default function ShoppingCart(props) {
    // fetching data from App.js
    const { cartItems, onAdd, onRemove } = props;

    // with reduce it gives back a value the value of all the elements, of list
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const totalPrice = itemsPrice;
    const data = totalPrice;
    const clearShop = useCartStore((state) => state.clearCart());


    const removeUser = useUser(state => state.removeLastUser);


    const navigate = useNavigate();

    const clearCart = () => {
        localStorage.removeItem('cartItems');
        removeUser();
        clearShop();
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

                        <Link to={{ pathname: "/payment", state: data }}>
                            <button className="navButtons">
                                Get in Q!
                            </button>
                        </Link>
                        <div className="components">
                            <button onClick={clearCart}>Cancel</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}