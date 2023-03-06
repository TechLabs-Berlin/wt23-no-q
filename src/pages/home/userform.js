import './userform.css';
import { useState } from 'react';
import {userData} from "../../mock/mock-data"


const UserForm = () => {
    const [name, setName] = useState('');
    const [number, setNumbers] = useState('');
    const [drink, setDrink] = useState('');
    // is false because we need it to happen after user submits the form, not when page is loaded
    const [isPending, setIsPending] = useState(false);
    const [waitingUsers, setWaitingUsers] = useState(userData)

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, number, drink };

        setIsPending(true);
        // have to check again why fetch not working
        fetch('http://localhost:3000/userform?', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('new user added');
            setIsPending(false);
        })

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
                {!isPending && <button>Get in Q!</button>}
                {isPending && <button disabled>You are in Q!</button>}
                <p>{name}</p>
                <p>{number}</p>
                <p>{drink}</p>

            </form>
        </div>
    )
}

export default UserForm;