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


    return (
        <div>
            {!formIsSubmitted ? (
                <UserForm submitForm={submitForm} />
            ) : (
                <UserLoggedIn />)}
        </div>
    );
};


export default Form;