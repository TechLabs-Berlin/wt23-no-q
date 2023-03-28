import React from "react";


const UserLoggedIn = (inqueue) => {

    console.log(inqueue)

    return (
        <div className="container">
            <h1 className="form-success">Hey {inqueue.name} You'are in Queue!!!
                Your number is {inqueue.length + 1}</h1>
        </div>

    )
}

export default UserLoggedIn;