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
              <div className="navButtonContent">
                <Link to="/drinks">
                  <LocalDrinkIcon />
                </Link>
                <span>Menu</span>
              </div>
            </button>
          </li>
          <li>
            <button className="navButtons">
              {/* have to connect shop props to navigation */}
              <Badge badgeContent={countCartItems} color="secondary">
                <div className="navButtonContent">
                  <Link to="/shop">
                    <ShoppingCartIcon />
                  </Link>
                  <span>Cart</span>
                </div>
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
