import React, { useState } from "react"; // Importing React and useState hook from 'react' module
import "./dropdown.css"; // Importing CSS file for this component
import Product from "../product"; // Importing Product component for rendering individual products
/* import BreakPoint from "../../../components/responsive_utilities/breakpoint"; */

function DrinkMenu(props) {
    const { products, onAdd, onRemove, cartItems } = props;

    const [active, setActive] = useState(null); // Setting up state using the useState hook

    const categories = ["beers", "cocktails", "wines"]; // Setting up an array of categories to render in the menu
    // const filteredProducts = products.filter(
    //     (product) => product.category === categories
    // );

    const handleClick = (index) => {
        // Event handler for button clicks
        if (active === index) {
            // If the button is already active
            setActive(null); // Deactivate it
        } else {
            // If the button is not active
            setActive(index); // Activate it
        }
    };

    const renderSubMenu = (products, category) => {
        const filteredProducts = products.filter((product) => product.category === category);
        const onAddWithLogs = (product) => {
            console.log("Product added to cart:", product);
            onAdd(product);
        };
        const onRemoveWithLogs = (product) => {
            onRemove(product);
        }

        return (
            <ul className="DrinkMenu__submenu">
                {/*         <BreakPoint /> */}
                <div className="DrinkMenu__products-container">
                    {filteredProducts.map((product) => (
                        <li key={product.id} className="DrinkMenu__submenu-li">
                            <div className="DrinkMenu__product">
                                <Product product={product}
                                    key={product.id}
                                    item={cartItems.find((x) => x.id === product.id)}
                                    onAdd={onAddWithLogs}
                                    onRemove={onRemoveWithLogs} />
                            </div>
                        </li>
                    ))}
                </div>
            </ul>
        );
    };

    return (
        <div className="DrinkMenu">
            {/*       <BreakPoint /> */}
            {categories.map((category, index) => (
                <div className="DrinkMenu__item" key={index}>
                    <button className={`DrinkMenu__button${active === index ? " active" : ""}`} onClick={() => handleClick(index)}>
                        {category}
                    </button>
                    {active === index && renderSubMenu(products, category)}
                </div>
            ))}
        </div>
    );
}

export default DrinkMenu; // Exporting DrinkMenu component as default export