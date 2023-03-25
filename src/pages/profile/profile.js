import React from "react";
import { Link } from "@mui/material";
import "./profile.css";

export default function Profile({ query }) {
  return (
    <>
      <h1>Profile Working</h1>
      <ul>
        <li>
          <h2>Hey, you are in the Queue ! You are the number ...</h2>
          console.log({query})
          <Link to="/payment">Pay Now</Link>
        </li>
      </ul>
    </>
  );
}
