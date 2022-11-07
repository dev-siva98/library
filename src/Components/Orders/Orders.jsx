import React from "react";
import Row from "./Row";
import { orders } from "../../data";

function Orders() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Order Id</th>
          <th scope="col">Book Id</th>
          <th scope="col">Date</th>
          <th scope="col">Last date</th>
          <th scope="col">Returned date</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((row) => {
          return <Row data={row} key={row._id} />;
        })}
      </tbody>
    </table>
  );
}

export default Orders;
