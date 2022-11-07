import React from "react";
import Header from "./Header";
import Row from "./Row";
import "./Table.css";

function Table({ headers, body, rows, edit }) {
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
        {rows.map((row, index) => {
          return <Row row={row} body={body} edit={edit} key={index} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
