import React from "react";
import { useState } from "react";
import UserForm from "./userform";
import UserLoggedIn from "./userlogin";
import InQueue from "./queue";

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
                <UserLoggedIn inqueue={submitForm} />)}
        </div>
    );
};


export default Form;