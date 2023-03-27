import React from "react";
import {useUserStore} from "../../useStore";


const UserLoggedIn = (user) => {
    const usersInQueue = useUserStore(state => state.usersArray);
    console.log(usersInQueue)
    return (
        <div className="container">
            <h1 className="form-success">Hey {user.name} You'are in Queue!!!
                Your number is {usersInQueue.length}</h1>
        </div>
    )
}

export default UserLoggedIn;