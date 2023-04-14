import "./navigation.css";
import HomeIcon from "@mui/icons-material/Home";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
// import LocalBarIcon from "@mui/icons-material/LocalBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import { styled } from "@mui/system";
import Badge from "@mui/material/Badge";
import logo from "../../logo/4logo.png";
import { useUser } from "../../useData";
import { useEffect } from "react";

const StyledHomeIcon = styled(HomeIcon, {
  name: "StyledHomeIcon",
  slot: "Wrapper",
})({
  color: "pink[500]",
});

function Navigation(props) {
  const { countCartItems } = props;

  const { usersArray } = useUser();
  const currentUser = usersArray[usersArray.length - 1];
  const userName = currentUser ? currentUser.name : "N/A";

  // console.log(useUser[1].name);
  // console.log(getState().useUser.name);

  return (
    <>
      <nav className="navBar">
        <ul>
          <img className="header-logo" src={logo} alt="logo" />
          Hello {userName}!
          <li>
            <button className="navButtons">
              <Link to="/drinks">
                <LocalDrinkIcon />
              </Link>
            </button>
          </li>
          <li>
            <button className="navButtons">
              {/* have to connect shop props to navigation */}
              <Badge badgeContent={countCartItems} color="secondary">
                <Link to="/shop">
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            </button>
            {/* : ${mytotal} / {mytotalqty} */}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
