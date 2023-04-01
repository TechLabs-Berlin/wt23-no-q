import React, { useState, useEffect } from "react";
import { Link } from "@mui/material";
import "./profile.css";

export default function Profile() {
  let user1 = window.localStorage.getItem('usersArray');
  console.log(user1);

  return (
    <>
      <h1>P</h1>
      <ul>
        <li>
          <h2>Hey  , Your ID is you are in the Queue ! You are the number ...</h2>

          <Link to="/payment">Pay Now</Link>
        </li>
      </ul>
    </>
  );
}
