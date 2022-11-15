import React, { useContext, useState } from "react";
import "./Navbar.css";
import avatar from "../Images/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../AppContext";
import Constants from "../../constants.json";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false); //to toggle dropdown menu
  const { isAdmin, setIsAdmin, isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setShowDropdown(!showDropdown);
    setIsLoggedIn(false);
    setIsAdmin(false)
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to={isAdmin ? "/admin" : "/"} className="nav-logo">
        <i className="bi bi-book-half"></i>
        <p>Library</p>
      </Link>
      <div className="nav-items">
        <Link className="nav-link" to={isAdmin ? "/admin" : "/"}>
          Home
        </Link>

        {isAdmin ? (
          <>
            <Link className="nav-link" to={"/admin/books"}>
              Books
            </Link>
            <Link className="nav-link" to={"/admin/users"}>
              Users
            </Link>
          </>
        ) : (
          isLoggedIn && (
            <Link className="nav-link" to={"/orders"}>
              Orders
            </Link>
          )
        )}

        <div
          className="nav-link dropdown-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img
            className="nav-avatar"
            src={
              isLoggedIn
                ? Constants.AVATAR_URL + //base string + name
                  localStorage.getItem(Constants.LOCALSTORAGE_KEY_USERNAME)
                : avatar //blank avatar
            }
            alt=""
          />
          <i
            className={
              showDropdown ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"
            }
          ></i>
        </div>
        {showDropdown && (
          <div className="dropdown-items">
            {isLoggedIn ? (
              <>
                <p className="navbar-logout" onClick={handleLogout}>
                  Logout
                </p>
              </>
            ) : (
              <Link
                to={"/login"}
                className="dropdown-link"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
