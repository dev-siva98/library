import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { adminBookHeaders, adminBookBody } from "../../data";
import Table from "../Common/Table";
import { Link } from "react-router-dom";

function AdminBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/book/get/all")
      .then((response) => setBooks(response.data))
      .catch((err) => console.log("Error " + err));
  }, []);

  return (
    <>
      <div className="books-header-container">
        <h1>Books</h1>
        <Link to={"/admin/addbook"} className="btn btn-success">Add book</Link>
      </div>
      <Table
        headers={adminBookHeaders}
        body={adminBookBody}
        rows={books}
        edit={true} //only books have edit as true for passing the props with id to edit details
      />
    </>
  );
}

export default AdminBooks;
