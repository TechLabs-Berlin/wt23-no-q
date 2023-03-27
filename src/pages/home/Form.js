import React from "react";
import { useState } from "react";
import InQueue from "./queue";
import UserForm from "./userform";
import UserLoggedIn from "./userlogin";

const Form = ({ parentCallBack }) => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);

    }

    return (

        <div>
            {!formIsSubmitted ? (
                <UserForm submitForm={submitForm} parentCallBack={parentCallBack} />
            ) : (
                <UserLoggedIn />)}
        </div>
    );
};


export default Form;