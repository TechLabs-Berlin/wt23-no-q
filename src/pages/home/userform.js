import './userform.css';
import { useState, useEffect, useRef } from 'react';
// import validation from './validation';
import { nanoid } from "nanoid";
import { useUser } from "../../useData";
import validation from './validation';
import { Navigate, redirect, useNavigate } from 'react-router-dom';




const UserForm = () => {
    const addUser = useUser(state => state.addUser);
    // to catch Errors
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    // const [shouldDirect, setShouldRedirect] = useState(false);






    const [values, setValues] = useState({
        name: "",
        number: "",
        gender: "",
        drink: "",
    });

    // sending the data in local storage


    // is false because we need it to happen after user submits the form, not when page is loaded
    const [isPending, setIsPending] = useState(false);
    // // After we see the data fetched we need to update the waiting users, or else we use the empty array
    // const [waitingUsers, setWaitingUsers] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    // every change will be stored in the name appropriate change in name stored in name etc
    function handleChange(e) {

        setValues({ ...values, [e.target.name]: e.target.value });


    }

    // form Submit Event
    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors(validation(values));
        let user = {
            id: nanoid(),
            name: values.name,
            gender: values.gender,
            number: values.number,
            drink: values.drink
        }
        addUser(user);
        if (Object.keys(errors).length === 0 && dataIsCorrect) {

            let path = `/drinks`;
            navigate(path);
        } else setDataIsCorrect(false);
        setDataIsCorrect(true);



    };

    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && dataIsCorrect) {
    //         setShouldRedirect(true)
    //     }
    // }, [errors])







    return (



        <div className="create">
            <h1 className='form-input'>User Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="What's your name?" value={values.name} id="name"
                        onChange={handleChange} name="name" />
                    {errors.name && <p className="error">{errors.name}</p>}

                </div>
                <div className="drink">
                    <label htmlFor="gender">What is your gender?</label>
                    <select className="gender" value={values.gender} onChange={handleChange} name="gender">
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
                        value={values.number}
                        onChange={handleChange} name="number" />
                    {errors.number && <p className="error">{errors.number}</p>}

                </div>
                <div className="drink">
                    <label htmlFor="drink">Favorite drink</label>
                    <select value={values.drink} onChange={handleChange} name="drink">
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

                <button onSubmit={handleChange} onClick={handleSubmit}>Get in Q!</button>
                {/* we have to put in the button to call the function Queue.js */}



            </form>
        </div>
    );
};


export default UserForm;