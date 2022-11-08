import React, { useState } from "react";
import "./BookCard.css";
import ConfirmationModal from "./ConfirmationModal";

function BookCard({ book }) {
  const [modalShow, setModalShow] = useState(false);
  const { _id, title, author, isbnNo, genre, img, copies } = book;

  return (
    <div className="card book-card">
      <img className="card-img-top" src={img} alt="book" />
      <div className="card-body book-card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">By {author}</p>
        <p className="card-text">{genre}</p>
        <p className="card-text">Id : {_id}</p>
        <p className="card-text">ISBN : {isbnNo}</p>
        {copies > 0 ? (
          <button
            className="btn btn-primary"
            onClick={() => setModalShow(true)}
          >
            Select
          </button>
        ) : (
          <p className="book-outof-stock">Out of stock</p>
        )}
      </div>
      <ConfirmationModal
        bookDetails={book}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default BookCard;
