import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../AppContext";
import "./AdminHome.css";
import Constants from "../../constants.json";

function AdminHome() {
  const { isAdmin, isLoggedIn } = useContext(LoginContext);

  const userName = localStorage.getItem(Constants.LOCALSTORAGE_KEY_USERNAME);

  return (
    <div className="admin-home-container home-welcome">
      {isLoggedIn ? (
        <>
          <h1 className="admin-header">Hey {userName}</h1>

          {isAdmin ? (
            <h2 className="admin-header-2">welcome to library management</h2>
          ) : (
            <h4>
              You are not authorized to be here, go <Link className="admin-home-link" to={"/"}>home</Link>
              buddy !!!
            </h4>
          )}
        </>
      ) : (
        <h3>
          <Link to={"/login"}>Login</Link> to manage library !!!
        </h3>
      )}

      {isAdmin && (
        <div className="admin-home-links">
          <Link to={"/admin/books"} className="btn btn-outline-info">
            Books
          </Link>
          <Link to={"/admin/users"} className="btn btn-outline-info">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}

export default AdminHome;
