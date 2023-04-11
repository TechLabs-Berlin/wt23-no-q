import React from "react";
import "./profile.css";
import { useUser } from "../../useData";

export default function Profile() {
  const { usersArray } = useUser();
  const currentUser = usersArray[usersArray.length - 1]; // Get the last user in the array
  const queueNumber = currentUser ? currentUser.number : "N/A";

  return (
    <>
      <div className="orderPage">
        <div className="profile">
          <h2>Hey, Your ID is and you are in the Queue! You are the number</h2>

          <div className="number-queue">#{queueNumber}</div>

          <h3>You'll be notified when your order is ready!</h3>
        </div>
      </div>
    </>
  );
}
