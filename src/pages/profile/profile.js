import React from "react";
import { Link } from "@mui/material";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <h1>Profile Working</h1>
      <ul>
        <li>
          <Link to="/payment">Pay Now</Link>
        </li>
      </ul>
    </>
  );
}
