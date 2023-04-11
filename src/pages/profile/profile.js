import React from "react";
import "./profile.css";
import { useUser } from "../../useData";

export default function Profile() {
  const { usersArray } = useUser();
  const currentUser = usersArray[usersArray.length - 1]; // Get the last user in the array
  const queueNumber = currentUser ? usersArray.length : "N/A";
  const userName = currentUser ? currentUser.name : "N/A";

  return (
    <>
      <div className="orderPage">
        <div className="profile">
          <h2>{userName}, Your Order Number is:</h2>

          <div className="number-queue">#{queueNumber}</div>

          <h3>You'll be notified when your order is ready!</h3>
        </div>
      </div>
    </>
  );
}
