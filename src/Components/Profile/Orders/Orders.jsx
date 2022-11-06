import React from "react";
import data from "../../Constants/data.json";
import Row from "./Row";

function Orders() {
  console.log(data.tableRow);
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Order Id</th>
          <th scope="col">Date</th>
          <th scope="col">Last date</th>
          <th scope="col">Return date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.tableRow.map((row) => {
          return <Row data={row} key={row.orderId} />;
        })}
      </tbody>
    </table>
  );
}

export default Orders;
