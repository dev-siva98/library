import React from "react";
// import Row from "./Row";

function Orders() {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Order Id</th>
          <th scope="col">Book Id</th>
          <th scope="col">Image</th>
          <th scope="col">Date</th>
          <th scope="col">Last date</th>
        </tr>
      </thead>
      <tbody>
        {/* {orders.map((row) => {
          return <Row data={row} key={row.id} />;
        })} */}
      </tbody>
    </table>
  );
}

export default Orders;
