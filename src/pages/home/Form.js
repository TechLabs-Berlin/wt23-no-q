import React from "react";
import { useState } from "react";
import UserForm from "./userform";
import UserLoggedIn from "./userlogin";
import { Navigate } from "react-router-dom";


const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    const getData = (data) => {
        console.log("Coming from the form", data)
    }


    return (
        <div>
            {!formIsSubmitted ? (
                <UserForm submitForm={submitForm} onSubmit={getData} />
            ) : (
                <UserLoggedIn />)}
        </div>
    );
};


export default Form;