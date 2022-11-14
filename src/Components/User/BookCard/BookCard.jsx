import React, { useState } from "react";
import "./BookCard.css";
import ConfirmationModal from "./ConfirmationModal";

function BookCard({ book, userDetails }) {
  const [modalShow, setModalShow] = useState(false);
  const {
    id,
    title,
    author,
    isbnNumber,
    genre,
    imageUrl,
    copiesAvailableForCheckout,
  } = book;

  const { orderedBooks } = userDetails;

  console.log(orderedBooks);
  const isLimitBreach = orderedBooks.size < 1;

  return (
    <div className="card book-card">
      <img className="card-img-top" src={imageUrl} alt="book" />
      <div className="card-body book-card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">By {author}</p>
        <p className="card-text">{genre}</p>
        <p className="card-text">Id : {id}</p>
        <p className="card-text">ISBN : {isbnNumber}</p>
        {copiesAvailableForCheckout > 0 ? (
          <button
            disabled={isLimitBreach}
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
