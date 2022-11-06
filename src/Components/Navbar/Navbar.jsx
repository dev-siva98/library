import React, { useState } from "react";
import "./Navbar.css";
import avatar from "../Images/avatar.png";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="nav-logo">Library Management</div>
      <ul className="nav-items">
        <li className="nav-link">Home</li>
        <li className="nav-link">Checkout</li>
        <div
          className="nav-link dropdown-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img className="nav-avatar" src={avatar} alt="" />
          <i
            class={
              showDropdown ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"
            }
          ></i>
        </div>
        {showDropdown && (
          <ul className="dropdown-items">
            <li className="dropdown-link">Account</li>
            <li className="dropdown-link">Login</li>
          </ul>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
