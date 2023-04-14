import React, { useEffect, useState } from "react";
import "./profile.css";
import { useUser } from "../../useData";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { usersArray, removeUser } = useUser();
  const currentUser = usersArray[usersArray.length - 1]; // Get the last user in the array
  const queueNumber = currentUser ? usersArray.length : "N/A";
  const userName = currentUser ? currentUser.name : "N/A";

  const navigate = useNavigate();
  const [isCanceled, setIsCanceled] = useState(false);

  const handleCancel = () => {
    if (currentUser) {
      removeUser(currentUser.id);
    }
    setIsCanceled(true);
    navigate("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isCanceled) {
        navigate("/drinkRating");
      }
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [isCanceled]);

  return (
    <>
      <div className="orderPage">
        <div className="profile">
          <h2 className="profile-h2">{userName}, your number is:</h2>

          <div className="number-queue">#{queueNumber}</div>

          <h3 className="profile-h3">You'll be notified when your order is ready!</h3>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
