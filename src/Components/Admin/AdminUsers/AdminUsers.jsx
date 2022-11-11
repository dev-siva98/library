import React from "react";
import Table from "./UserTable/Table";
import { adminUserHeaders, adminUserBody } from "../../../data";

function AdminUsers() {
  return (
    <>
      <h1>Users</h1>
      <Table headers={adminUserHeaders} body={adminUserBody} />
    </>
  );
}

export default AdminUsers;
