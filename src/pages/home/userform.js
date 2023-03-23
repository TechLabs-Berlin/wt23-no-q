import './userform.css';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Drinks from "../drinks/drinks";



const UserForm = () => {
    // to catch Errors
    const errRef = useRef();
    const [success, setSuccess] = useState(false);
    // States to update the content whenever a user is adding info
    const [name, setName] = useState('');
    const [number, setNumbers] = useState('');
    const [gender, setGender] = useState('');
    const [drink, setDrink] = useState('');
    // to add error message
    const [errMsg, setErrMsg] = useState('');
    const [users, setUsers] = useState([]);
    const [index, setIndex] = useState(null);
    const navigate = useNavigate();



    // is false because we need it to happen after user submits the form, not when page is loaded
    const [isPending, setIsPending] = useState(false);
    // After we see the data fetched we need to update the waiting users, or else we use the empty array
    const [waitingUsers, setWaitingUsers] = useState('3');
    // adding the fake data 
    let queue = [
        {
            name: "Petros",
            gender: "male",
            number: 2,
            favoriteDrink: "Whiskey"
        },
        {
            name: "Seanna",
            gender: "female",
            number: 8,
            favoriteDrink: "Rum"
        },
        {
            name: "Phaedra",
            gender: "other",
            number: 15,
            favoriteDrink: "Vodka"
        }
    ];



    useEffect(() => {
        setErrMsg('');
    }, [name, number, gender, drink])

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
        setUsers({ ...users, user })
        console.log(queue);
        // console.log(setUsers);
        setIsPending(true);
        setSuccess(true);


    };

    const navigateToOrder = () => {
        navigate({ Drinks });
    };

    function handleChange(e) {
        setWaitingUsers({ ...waitingUsers, [e.target.value]: e.target.value });
        // setQueueuNumber(queueNumber.length + 1);

    }


    return (
        <>
            {success ? (
                <section>

                    <h1>Hello {name} You are logged in Q!</h1>
                    <br />

                    <h1>Your number is {(queue.length + 1)}</h1>
                    <h1>Your ID is </h1>
                    <p>
                        <button onClick={navigateToOrder}>
                            if you want to order press here
                        </button>
                    </p>
                </section>
            ) : (

                <div className="create">
                    {/* this p displays the error message */}
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='form-input'>User Form</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" placeholder="What's your name?" value={name} id="name"
                            onChange={(e) => setName(e.target.value)} required />
                        <label htmlFor="gender">What is your gender?</label>
                        <select className="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                            <option value="">--Please select an option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <label htmlFor="party">Number of people:</label>
                        <input type="number" min="1" max="30" id="party" placeholder="How many are you?"
                            value={number}
                            onChange={(e) => setNumbers(e.target.value)} required />

                        <label>Favorite drink</label>
                        <select value={drink} onChange={(e) => setDrink(e.target.value)} required>
                            <option value="">--Please select an option</option>
                            <option value="whiskey">Whiskey</option>
                            <option value="gin">Gin</option>
                            <option value="vodka">Vodka</option>
                            <option value="rum">Rum</option>
                            <option value="beer">Beer</option>
                            <option value="water">Water</option>

                        </select>
                        {/* to redirect to the new page of the user */}

                        {!isPending && <button onClick={handleChange}>Get in Q!</button>}
                        {/* we have to put in the button to call the function Queue.js */}
                        {isPending && <button disabled>You are in Q!</button>}



                        <p>{name}</p>
                        <p>{gender}</p>
                        <p>{number}</p>
                        <p>{drink}</p>

                    </form>
                </div>
            )}
        </>
    )
}

export default UserForm;