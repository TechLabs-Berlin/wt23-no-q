import './userform.css';
import { useState } from 'react';
// import { users } from "../../mock/mock-data";
import { Link } from 'react-router-dom';


const UserForm = () => {
    // States to update the content whenever a user is adding info
    const [name, setName] = useState('');
    const [number, setNumbers] = useState('');
    const [gender, setGender] = useState('');
    const [drink, setDrink] = useState('');
    const [user, setUser] = useState([]);

    // is false because we need it to happen after user submits the form, not when page is loaded
    const [isPending, setIsPending] = useState(false);
    // After we see the data fetched we need to update the waiting users, or else we use the empty array
    const [waitingUsers, setWaitingUsers] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // const users = { name, number, gender, drink };
        // because it is not completed we set it to true

        setIsPending(true);

    }


    function handleChange(e) {
        setWaitingUsers({ ...waitingUsers, [e.target.value]: e.target.value })
    }


    return (
        <div className="create">
            <h1 className='form-input'>User Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" placeholder="What's your name?" value={name}
                    onChange={(e) => setName(e.target.value)} required />
                <label>What is your gender?</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">--Please select an option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
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
                {/* to redirect to the new page of the user */}
                <Link to='../profile'>
                    {!isPending && <button>Get in Q!</button>}

                    {isPending && <button disabled>You are in Q!</button>}
                </Link>
                <p>{name}</p>
                <p>{gender}</p>
                <p>{number}</p>
                <p>{drink}</p>

            </form>
        </div>
    )
}

export default UserForm;