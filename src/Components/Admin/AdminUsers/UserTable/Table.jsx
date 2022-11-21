import axios from "../../../../axios";
import React, { useEffect, useState } from "react";
import Row from "./Row";
import { adminUserHeaders } from "../../../../data";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/user/get/all")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log("Error " + err));
  }, []);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {adminUserHeaders.map((header, index) => {
            return (
              <th scope="col" key={index}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return <Row user={user} key={index} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
