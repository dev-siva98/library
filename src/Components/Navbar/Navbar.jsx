import React, { useState } from "react";
import "./Navbar.css";
import avatar from "../Images/avatar.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false); //to toggle dropdown menu

  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to={"/"} className="nav-logo">
        <i className="bi bi-book-half"></i>
        <p> Library</p>
      </Link>
      <div className="nav-items">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/orders"}>
          Orders
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
            <Link
              to={"profile"}
              className="dropdown-link"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Profile
            </Link>
            <Link
              to={"login"}
              className="dropdown-link"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
