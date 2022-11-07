import React from "react";
import Table from "../Common/Table";
import { adminUserHeaders, adminUserBody, users } from "../../data";

function AdminUsers() {
  return (
    <div>
      <h1>Users</h1>
      <Table headers={adminUserHeaders} body={adminUserBody} rows={users} />
    </div>
  );
}

export default AdminUsers;
