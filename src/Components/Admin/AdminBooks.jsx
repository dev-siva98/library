import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { adminBookHeaders, adminBookBody } from "../../data";
import Table from "../Common/Table";
import { Link } from "react-router-dom";

function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [updateComponent, setUpdateComponent] = useState(false);

  //fetch and update books after every delete and edit
  const handleUpdate = () => {
    setUpdateComponent(!updateComponent);
  };

  useEffect(() => {
    axios
      .get("/book/get/all")
      .then((response) => setBooks(response.data))
      .catch((err) => console.log("Error " + err));
  }, [updateComponent]);

  return (
    <>
      <div className="books-header-container">
        <h1>Books</h1>
        <Link to={"/admin/addbook"} className="btn btn-success">
          Add book
        </Link>
      </div>
      <Table
        headers={adminBookHeaders}
        body={adminBookBody}
        rows={books}
        edit={true} //only books component have edit attribute as true to enable edit and delete buttons
        //function get invoked after updating book details or deleting book
        handleUpdate={handleUpdate} //state changes from child component
      />
    </>
  );
}

export default AdminBooks;
