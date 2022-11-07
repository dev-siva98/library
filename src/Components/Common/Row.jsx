import React from "react";
import { Link } from "react-router-dom";

function Row({ body, row, edit }) {
  const handleDelete = (bookId) => {
    console.log(bookId);
  };

  return (
    <tr>
      <th scope="row">{row._id}</th>

      {body.map((column, index) => {
        return <td key={index}>{row[column]}</td>;
      })}

      {edit ? (
        <td>
          <Link to={`/admin/editbook/${row._id}`} className="btn btn-primary row-edit">
            <i className="bi bi-pencil-fill"></i>
          </Link>
          <button
            onClick={() => handleDelete(row._id)}
            className="btn btn-danger"
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </td>
      ) : (
        <td>
          <button className="btn btn-primary">view</button>
        </td>
      )}
    </tr>
  );
}

export default Row;
