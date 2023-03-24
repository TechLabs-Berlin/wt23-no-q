import React from "react";
import { useState } from "react";
import UserForm from "./userform";
import InQueue from "./inQueue";

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
                <InQueue />)}
        </div>
    );
};


export default Form;