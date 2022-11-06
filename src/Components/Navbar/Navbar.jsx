import React, { useState } from "react";
import "./Navbar.css";
import avatar from "../Images/avatar.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="nav-logo">Library Management</div>
      <div className="nav-items">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/"}>
          Checkout
        </Link>
        <div
          className="nav-link dropdown-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img className="nav-avatar" src={avatar} alt="" />
          <i
            className={
              showDropdown ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"
            }
          ></i>
        </div>
        {showDropdown && (
          <div className="dropdown-items">
            <Link to={"profile"} className="dropdown-link">
              Account
            </Link>
            <Link to={"login"} className="dropdown-link">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
