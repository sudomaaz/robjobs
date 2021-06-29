import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logoutAction } from "../actions/user";
import { clearAction } from "../actions/job";

const Header = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const alert = useAlert();
  const logoutHandler = () => {
    dispatch(logoutAction());
    dispatch(clearAction());
    alert.success("Logged out Successfully");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h4>RobJobs - Dream Job Destination</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active dropdown-toggle"
                  to="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.name}
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/dashboard">
                    <li>Dashboard</li>
                  </Link>
                  <Link
                    onClick={() => logoutHandler()}
                    className="dropdown-item"
                    to="#"
                  >
                    <li>Logout</li>
                  </Link>
                </ul>
              </li>
            ) : (
              <Link className="nav-link active" to="/login">
                <li className="nav-item">Login</li>
              </Link>
            )}
            <Link className="nav-link" to="/register">
              <li className="nav-item">Sign Up</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
