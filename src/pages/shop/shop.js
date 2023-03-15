import React from "react";



export default function ShoppingCart(props) {
    // fetching data from App.js
    const { cartItems, onAdd, onRemove } = props;
    return (
        <div className="block-col-1">
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
                        {/* the display of items and  to fixed id 2dcmal*/}
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
        </div>
    );
}