import "./navigation.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
// import LocalBarIcon from "@mui/icons-material/LocalBar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet, Link } from "react-router-dom";
import PaymentIcon from "@mui/icons-material/Payment";
import React from "react";
import { styled } from "@mui/system";

const StyledHomeIcon = styled(HomeIcon, {
  name: "StyledHomeIcon",
  slot: "Wrapper"
})({
  color: "pink[500]",
});



function Navigation() {
<<<<<<< HEAD
    return (
        <>
        <nav>
            <ul>
                <li>
                    <button>
                        <Link to="/">
                            <HomeIcon/>
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="/drinks">
                            <LocalDrinkIcon/>
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="/bars">
                            <LocalBarIcon/>
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link to="/profile">
                            <AccountCircleIcon/>
                        </Link>
                    </button>
                </li>
            </ul>
        </nav>
    <Outlet />
</>
);
=======
  return (
    <>
      <nav className="navBar">
        <ul>
          <li>
            <button className="navButtons">
              <Link to="/">
                <StyledHomeIcon />
              </Link>
            </button>
          </li>
          <li>
            <button className="navButtons">
              <Link to="/drinks">
                <LocalDrinkIcon />
              </Link>
            </button>
          </li>
          <li>
            <button className="navButtons">
              <Link to="/shop">
                <ShoppingCartIcon />
              </Link>
            </button>
          </li>
          <li>
            <button className="navButtons">
              <Link to="/profile">
                <AccountCircleIcon />
              </Link>
            </button>
          </li>
          <li>
            <button className="navButtons">
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
>>>>>>> 7beb60500b81c43047acdaf866d1abed9c475067
}

export default Navigation;
