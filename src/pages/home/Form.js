import React from "react";
import { useState } from "react";
import UserForm from "./userform";
import UserLoggedIn from "./userlogin";

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
                <UserLoggedIn user={user} />)}
        </div>
    );
};


export default Form;