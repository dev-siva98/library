import React from "react";
import { adminBookHeaders, adminBookBody, books } from "../../data";
import Table from "../Common/Table";

function AdminBooks() {
  return (
    <>
    <div className="books-header-container">
      <h1>Books</h1>
      <button className="btn btn-success">Add book</button>
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
