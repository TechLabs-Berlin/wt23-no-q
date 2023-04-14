import React from "react";
import { useEffect, useState } from "react";
import InQueue from "./queue";


const UserLoggedIn = (values) => {

    return (
        <div className="container">
            <h1 className="form-success">You'are in Queue!!!</h1>
            <p>Your number is </p>
        </div>

    )
}

export default UserLoggedIn;