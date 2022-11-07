import React from "react";
import { adminBookHeaders, adminBookBody, books } from "../../data";
import Table from "../Common/Table";

function AdminBooks() {
  return (
    <div>
      <h1>Books</h1>
      <Table headers={adminBookHeaders} body={adminBookBody} rows={books}/>
    </div>
  );
}

export default AdminBooks;
