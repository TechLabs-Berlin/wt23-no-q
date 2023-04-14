import React from "react";
import Product from "./product";
import DrinkMenu from "./dropdown/dropdown";

// to pass the data to components from the source we pass it as props
export default function Drinks(props) {
  const { cartItems, products, onAdd, onRemove } = props;

  return (
    <div className="block">
      <h1 className="menu">Menu</h1>
      <div className="row">

        <DrinkMenu
          products={products}
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        />

      </div>
    </div>
  );
}

