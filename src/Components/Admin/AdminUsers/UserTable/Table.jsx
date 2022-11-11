import axios from "../../../../axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Row from "./Row";
import "./Table.css";

function Table({ headers, body }) {
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
          {headers.map((header, index) => {
            return <Header header={header} key={index} />;
          })}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return <Row user={user} body={body} key={index} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
