import "./drinks.css";

export default function Product(props) {
    // the same process as we did to drinks.js in order to pass the data in children from Parents with props
    const { product } = props;
    return (
        <div className="card">
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}