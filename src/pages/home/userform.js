import './userform.css';
import { useState } from 'react';

const UserForm = () => {
    const [name, setName] = useState('');
    const [number, setNumbers] = useState('');
    const [drink, setDrink] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, number, drink };
        console.log(user);
    }

    return (
        <div className="create">
            <h1>User Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" placeholder="What's your name?" value={name}
                    onChange={(e) => setName(e.target.value)} required />
                <label>Number of people:</label>
                <input type="number" min="1" max="30" placeholder="How many are you?"
                    value={number}
                    onChange={(e) => setNumbers(e.target.value)} />
                <label>Favorite drink</label>
                <select value={drink} onChange={(e) => setDrink(e.target.value)}>
                    <option value="">--Please select an option</option>
                    <option value="whiskey">Whiskey</option>
                    <option value="gin">Gin</option>
                    <option value="vodka">Vodka</option>
                    <option value="rum">Rum</option>
                    <option value="beer">Beer</option>
                    <option value="water">Water</option>

                </select>
                <button>Get in Q!</button>
                <p>{name}</p>
                <p>{number}</p>
                <p>{drink}</p>

            </form>
        </div>
    )
}

export default UserForm;