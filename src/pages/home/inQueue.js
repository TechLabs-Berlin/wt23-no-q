import React from "react";
import { useEffect, useState } from "react";


const InQueue = () => {
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);
    if (!authenticated) {

    } else {
        return (
            <h1>You'are in Queue!!!</h1>


        )
    }
}

export default InQueue;