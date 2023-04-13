import "./drinks.css";

export default function Product(props) {
    // the same process as we did to drinks.js in order to pass the data in children from Parents with props
    const { item, product, onAdd, onRemove } = props;
    const handleAddToCart = () => {
        onAdd(product);
    }
    return (
        <div className="card">
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                {item ? (<div>
                    <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => onAdd(item)} className="add">
                        +
                    </button>
                </div>
                ) : (
                    <button onClick={handleAddToCart}>Add to Cart</button>
                )}

            </div>
        </div>
    );
}