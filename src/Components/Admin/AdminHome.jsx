import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../AppContext";
import "./AdminHome.css";

function AdminHome() {
  const { isAdmin, isLoggedIn } = useContext(LoginContext);

  return (
    <div className="admin-home-container home-welcome">
      {isLoggedIn ? (
        <>
          <h1 className="admin-header">Hey Siva</h1>

          {isAdmin ? (
            <h2 className="admin-header-2">welcome to library management</h2>
          ) : (
            <h4>
              You are not authorized to be here, go <Link to={"/"}>home</Link>{" "}
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
