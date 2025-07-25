import { useContext } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Goal Setter</Link>
      </div>
      {user ? (
        <ul>
          <li onClick={logoutHandler}>
            <button className="btn">
              <FaSignOutAlt className="rotate-180" /> Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/auth/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to="/auth/register">
              <FaUser /> Register
            </Link>
          </li>{" "}
        </ul>
      )}
    </header>
  );
};

export default Header;
