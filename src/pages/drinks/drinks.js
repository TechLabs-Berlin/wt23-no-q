import React from "react";
import Product from "./product";

// to pass the data to components from the source we pass it as props
export default function Drinks(props) {
  const { products } = props;

  return (
    <div className="block">
      <h1>Drinks Working</h1>
      <div className="row">
        {/* to find each element in the products and collect the data */}
        {products.map((product) => (
          // to pass the products to the Product component we have to call product={product} so in order to pass the product from the products(with the map) and pass it on
          <Product key={product.id} product={product}>
          </Product>
        ))}
      </div>
    </div>
  )
}

