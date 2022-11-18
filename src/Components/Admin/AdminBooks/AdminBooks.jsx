import React, { useContext, useEffect } from "react";
import Table from "./BookTable/Table";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../../AppContext";

function AdminBooks() {
  const { isLoggedIn, isAdmin } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin || !isLoggedIn) navigate("/");
  }, []);
  return (
    <>
      <div className="books-header-container">
        <h1>Books</h1>
        <Link to={"/admin/addbook"} className="btn btn-success">
          Add book
        </Link>
      </div>
      <Table />
    </>
  );
}

export default AdminBooks;
