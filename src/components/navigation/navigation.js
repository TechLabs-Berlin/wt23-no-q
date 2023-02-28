import "./navigation.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { Outlet, Link } from "react-router-dom";
import PaymentIcon from "@mui/icons-material/Payment";

function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button>
              <Link to="/">
                <HomeIcon />
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/drinks">
                <LocalDrinkIcon />
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/bars">
                <LocalBarIcon />
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/profile">
                <AccountCircleIcon />
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/paymentform">
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
