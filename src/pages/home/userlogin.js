import React from "react";
import { useEffect, useState } from "react";
import InQueue from "./queue";


const UserLoggedIn = ({ parentCallBack }) => {

    console.log(parentCallBack.users)

    return (
        <div className="container">
            <h1 className="form-success">Hey You'are in Queue!!!
                Your number is </h1>
        </div>

    )
}

export default UserLoggedIn;