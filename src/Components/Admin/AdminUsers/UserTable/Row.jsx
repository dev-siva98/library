import React from "react";
import { adminUserBody } from "../../../../data";


function Row({ user }) {
  const localDateString = new Date(user.createdAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <tr>
      <th scope="row">{user.id}</th>

      {adminUserBody.map((column, index) => {
        return <td key={index}>{user[column]}</td>;
      })}

      <td style={{ textTransform: "uppercase" }}>{localDateString}</td>
    </tr>
  );
}

export default Row;
