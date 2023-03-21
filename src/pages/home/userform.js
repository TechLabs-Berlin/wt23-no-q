import './userform.css';
import { useState } from 'react';
import { userData } from "../../mock/mock-data";
import { Link } from 'react-router-dom';


const UserForm = () => {
    // States to update the content whenever a user is adding info
    const [name, setName] = useState('');
    const [number, setNumbers] = useState('');
    const [drink, setDrink] = useState('');
    const [index, setIndex] = useState(null)
    // is false because we need it to happen after user submits the form, not when page is loaded
    const [isPending, setIsPending] = useState(false);
    // After we see the data fetched we need to update the waiting users, or else we use the empty array that Petros suggested
    const [waitingUsers, setWaitingUsers] = useState(userData);
    let queue = [
        {name:"Petros"},
        {name:"Seanna"},
        {name:"Phaedra"}
    ]
    let queueNumber;

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, number, drink };
        queue.push(user)
        let findQuery = user.name;
        for(let i = 0; i < queue.length; i++){
           if(findQuery === queue[i].name){
               setIndex(i+1)
               console.log(index)
           }
        }




        // because it is not completed we set it to true

        setIsPending(true);
        // have to check again why fetch not working and cannot add users, we want to redirect it in the mock data we did
        fetch('http://localhost:3000/userform?', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('new user added');
            // then is set to false when it is completed
            setIsPending(false);

        })

    }
    return (
        <div className="create">
            <h1 className='form-input'>User Form</h1>
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
                {/* to redirect to the new page of the user */}
              {/*  <Link to='../profile'>
                    {!isPending && <button>Get in Q!</button>}

                    {isPending && <button disabled>You are in Q!</button>}
                </Link>*/}

                <button></button>
            </form>
            <p>{name}</p>
            <p>{number}</p>
            <p>{drink}</p>
            <strong>Queue : {index}</strong>
        </div>
    )
}

export default UserForm;