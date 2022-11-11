import React from "react";
import Table from "./BookTable/Table";
import { Link } from "react-router-dom";

function AdminBooks() {
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
