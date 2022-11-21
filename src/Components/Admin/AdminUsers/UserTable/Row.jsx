import React from "react";

function Row({ user }) {
  const localDateString = new Date(user.createdAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <tr>
      <th scope="row">{user.id}</th>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.dateOfBirth}</td>
      <td style={{ textTransform: "uppercase" }}>{localDateString}</td>
    </tr>
  );
}

export default Row;
