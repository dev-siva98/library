import axios from "../../axios";
import React from "react";
import { Link } from "react-router-dom";

function Row({ body, row, edit, handleUpdate }) {
  const handleDelete = (bookId) => {
    const confirmDelete = window.confirm(
      "Do you want to delete " + row._id + " ?"
    );

    if (!confirmDelete) return;

    axios
      .delete(`/book/delete/${bookId}`)
      .then((response) => {
        if (response.data) {
          alert("Deleted");
          handleUpdate();
        } else {
          alert("Error deleting");
        }
      })
      .catch((err) => {
        console.log("Error " + err);
      });
  };

  return (
    <tr>
      <th scope="row">{row._id}</th>

      {body.map((column, index) => {
        return <td key={index}>{row[column]}</td>;
      })}

      {edit && (
        <td>
          <Link
            to={`/admin/editbook/${row._id}`}
            className="btn btn-primary row-edit"
          >
            <i className="bi bi-pencil-fill"></i>
          </Link>
          <button
            onClick={() => handleDelete(row._id)}
            className="btn btn-danger"
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </td>
      )}
    </tr>
  );
}

export default Row;
