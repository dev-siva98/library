import React from "react";
import { Link } from "react-router-dom";
import './AdminHome.css'

function AdminHome() {
  return (
    <div className="admin-home-container home-welcome">
      <h1 className="admin-header">Hey Siva</h1>
      <h2 className="admin-header-2">welcome to library management</h2>
      <div className="admin-home-links">
        <Link to={"/admin/books"} className="btn btn-outline-info">
          Books
        </Link>
        <Link to={"/admin/users"} className="btn btn-outline-info">
          Users
        </Link>
        <Link to={"/admin/orders"} className="btn btn-outline-info">
          Orders
        </Link>
      </div>
    </div>
  );
}

export default AdminHome;
