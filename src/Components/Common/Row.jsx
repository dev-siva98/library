import React from "react";

function Row({ body, row }) {
  return (
    <tr>
      <th scope="row">{row[body[0]]}</th>

      {body.map((column, index) => {
        if (index > 0) return <td>{row[column]}</td>;
      })}
      
      <td>
        <button className="btn btn-primary">view</button>
      </td>
    </tr>
  );
}

export default Row;
