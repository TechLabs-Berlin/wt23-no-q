import './userform.css';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import validation from './validation';



const UserForm = ({ onQuery }) => {
    // to catch Errors
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    // States to update the content whenever a user is adding info
    const [name, setName] = useState('');
    const [number, setNumbers] = useState('');
    const [gender, setGender] = useState('');
    const [drink, setDrink] = useState('');
    const [users, setUsers] = useState([]);
    const [index, setIndex] = useState(null);

    // is false because we need it to happen after user submits the form, not when page is loaded
    const [isPending, setIsPending] = useState(false);
    // // After we see the data fetched we need to update the waiting users, or else we use the empty array
    const [waitingUsers, setWaitingUsers] = useState('3');
    // adding the fake data 
    let queue = [
        {
            name: "Petros",
            gender: "male",
            number: '2',
            drink: "Whiskey"
        },
        {
            name: "Seanna",
            gender: "female",
            number: '8',
            drink: "Rum"
        },
        {
            name: "Phaedra",
            gender: "other",
            number: '15',
            drink: "Vodka"
        }
    ];


    // form Submit Event
    const handleSubmit = async (e) => {
        e.preventDefault();

        // creating the object (user)
        const user = {
            name,
            gender,
            number,
            drink
        }
        queue.push(user)

        let findQuery = user.name;

        for (let i = 0; i < queue.length; i++) {
            if (findQuery === queue[i].name) {
                setIndex(i + 1)
                console.log(index)

            }
        };

        setErrors(validation(queue));
        // setUsers({ ...users, user })
        console.log(queue);

        setIsPending(true);
        setSuccess(true);


    };


    function handleChange(e) {
        setWaitingUsers({ ...waitingUsers, [e.target.value]: e.target.value });
        // setQueueuNumber(queueNumber.length + 1);

        // passing the data
        onQuery(e.target.value);

    }


    return (


        <div className="create">
            <h1 className='form-input'>User Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="What's your name?" value={name} id="name"
                        onChange={(e) => setName(e.target.value)} name="name" />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="drink">
                    <label htmlFor="gender">What is your gender?</label>
                    <select className="gender" value={gender} onChange={(e) => setGender(e.target.value)} name="gender">
                        <option value="">--Please select an option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="error">{errors.gender}</p>}
                </div>
                <div className="number">
                    <label htmlFor="party">Number of people:</label>
                    <input type="number" min="1" max="30" id="party" placeholder="How many are you?"
                        value={number}
                        onChange={(e) => setNumbers(e.target.value)} name="number" />
                    {errors.number && <p className="error">{errors.number}</p>}
                </div>
                <div className="drink">
                    <label htmlFor="drink">Favorite drink</label>
                    <select value={drink} onChange={(e) => setDrink(e.target.value)} name="drink">
                        <option value="">--Please select an option</option>
                        <option value="whiskey">Whiskey</option>
                        <option value="gin">Gin</option>
                        <option value="vodka">Vodka</option>
                        <option value="rum">Rum</option>
                        <option value="beer">Beer</option>
                        <option value="water">Water</option>
                    </select>
                    {errors.drink && <p className="error">{errors.drink}</p>}
                </div>
                {/* to redirect to the new page of the user */}

                {!isPending && <button onSubmit={handleChange}>Get in Q!</button>}
                {/* we have to put in the button to call the function Queue.js */}
                {isPending && <button disabled>You are in Q!</button>}


            </form>
        </div>
    )
}


export default UserForm;