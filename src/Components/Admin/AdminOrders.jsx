import React from "react";
import { adminOrderHeaders, adminOrderBody, allOrders } from "../../data";
import Table from "../Common/Table";

function AdminOrders() {
  return (
    <div>
      <h1>Books</h1>
      <Table
        headers={adminOrderHeaders}
        body={adminOrderBody}
        rows={allOrders}
        edit={false} //only books have edit as true for passing the props with id to edit details
      />
    </div>
  );
}

export default AdminOrders;
