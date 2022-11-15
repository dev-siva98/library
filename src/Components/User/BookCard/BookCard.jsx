import React, { useEffect, useState } from "react";
import "./BookCard.css";
import ConfirmationModal from "./ConfirmationModal";

function BookCard(props) {
  const { book, isCheckoutLimitBreach, handleUpdateData, userDetails } = props;

  const [modalShow, setModalShow] = useState(false);
  const [disableButton, setDisableButton] = useState(false); //to disable button if book already in the array

  const {
    id,
    title,
    author,
    isbnNumber,
    genre,
    imageUrl,
    copiesAvailableForCheckout,
  } = book;

  useEffect(() => {
    userDetails?.orderedBooks.forEach((bookItem) => {
      //only works when there book in array
      if (bookItem.bookId === id) {
        setDisableButton(true);
      }
    });
  }, [userDetails]);

  const handleSelect = () => {
    setModalShow(true);
  };

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
            disabled={isCheckoutLimitBreach || disableButton}
            className="btn btn-primary"
            onClick={handleSelect}
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
        handleUpdateData={handleUpdateData}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default BookCard;
