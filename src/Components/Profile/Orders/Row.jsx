import React from "react";

function Row({ data }) {
  console.log(data);
  return (
    <tr>
      <th scope="row">{data.orderId}</th>
      <td>{data.date}</td>
      <td>{data.expiry}</td>
      <td>{data.returnDate}</td>

      <td>
        <button className="btn btn-primary">view</button>
      </td>
    </tr>
  );
}

export default Row;
