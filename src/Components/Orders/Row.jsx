import React from "react";

function Row({ data }) {
  console.log(data);
  return (
    <tr>
      <th scope="row">{data._id}</th>
      <td>{data.bookId}</td>
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
