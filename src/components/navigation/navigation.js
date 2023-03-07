import "./navigation.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { Outlet, Link } from "react-router-dom";
import PaymentIcon from "@mui/icons-material/Payment";
import React from "react";

function Navigation() {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li>
            <button className="nav-buttons">
              <Link to="/">
                <HomeIcon />
              </Link>
            </button>
          </li>
          <li>
            <button className="nav-buttons">
              <Link to="/drinks">
                <LocalDrinkIcon />
              </Link>
            </button>
          </li>
          <li>
            <button className="nav-buttons">
              <Link to="/bars">
                <LocalBarIcon />
              </Link>
            </button>
          </li>
          <li>
            <button className="nav-buttons">
              <Link to="/profile">
                <AccountCircleIcon />
              </Link>
            </button>
          </li>
          <li>
            <button className="nav-buttons">
              <Link to="/payment">
                <PaymentIcon />
              </Link>
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
