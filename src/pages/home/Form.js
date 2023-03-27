import React from "react";
import { useState } from "react";
import InQueue from "./queue";
import UserForm from "./userform";
import UserLoggedIn from "./userlogin";
// import InQueue from "./queue";

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
                <UserLoggedIn parentCallBack={parentCallBack} />)}
        </div>
    );
};


export default Form;