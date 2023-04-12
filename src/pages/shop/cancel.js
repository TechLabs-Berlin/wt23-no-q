import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from "../../useData";
// import { useCartStore } from "../../useCartStore";

const CancelButton = ({ onCancel }) => {
    const clearShop = useCartStore((state) => state.clearCart());


    const removeUser = useUser(state => state.removeLastUser);


    const navigate = useNavigate();
    const handleCancel = () => {
        onCancel();
        localStorage.removeItem('cartItems');
        removeUser();
        clearShop();
        navigate('/');
    };

    return (
        <div className="components">
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default CancelButton;