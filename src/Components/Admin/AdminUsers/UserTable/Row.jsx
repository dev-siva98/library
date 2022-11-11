import React from "react";

function Row({ body, user }) {
  return (
    <tr>
      <th scope="row">{user.id}</th>

      {body.map((column, index) => {
        return <td key={index}>{user[column]}</td>;
      })}
    </tr>
  );
}

export default Row;
