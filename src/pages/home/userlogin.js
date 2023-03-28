import React from "react";


const UserLoggedIn = ({ user }) => {


    return (
        <div className="container">
            <h1 className="form-success">Hey {user.name}  You'are in Queue!!!
                Your number is </h1>
        </div>

    )
}

export default UserLoggedIn;