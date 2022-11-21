import axios from "../../../../axios";
import React from "react";
import { Link } from "react-router-dom";

function Row({ body, book, handleUpdate }) {
  const handleDelete = (bookId) => {
    const confirmDelete = window.confirm(
      "Do you want to delete " + book.id + " ?"
    );

    if (!confirmDelete) return;

    axios
      .delete(`/book/delete/${bookId}`)
      .then((response) => {
        if (response.data) {
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
      <th scope="book">{book.id}</th>

      {body.map((column, index) => {
        return <td key={index}>{book[column]}</td>;
      })}

      <td>
        <Link
          to={`/admin/editbook/${book.id}`}
          className="btn btn-primary book-edit"
        >
          <i className="bi bi-pencil-fill"></i>
        </Link>
        <button
          onClick={() => handleDelete(book.id)}
          className="btn btn-danger"
        >
          <i className="bi bi-trash-fill"></i>
        </button>
      </td>
    </tr>
  );
}

export default Row;
