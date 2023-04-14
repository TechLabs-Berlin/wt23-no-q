import React, { useState, useEffect } from "react";
import { Link } from "@mui/material";
import "./profile.css";
// import { useNavigate } from "react-router-dom";

export default function Profile() {
  // let user1 = window.localStorage.getItem('usersArray');
  // console.log(user1);
  // let ID = localStorage.getItem
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/thankyou')
  //   }, 5000)
  // }, [])




  return (
    <>
      <div className="orderPage">
        <div className="profile">
          <h2>Hey , Your ID is and you are in the Queue ! You are the number</h2>


          {/* <Link to="/payment">Pay Now</Link> */}
          <div className="number-queue">
            #4
          </div>
          <h3>
            You'll be notified when your order is ready!
          </h3>


        </div>
      </div>
    </>
  );
}
