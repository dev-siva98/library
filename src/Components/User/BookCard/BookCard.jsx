import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import "./BookCard.css";
import ConfirmationModal from "./ConfirmationModal";
import Constants from "../../../constants.json";

function BookCard({ book }) {
  const [modalShow, setModalShow] = useState(false);
  const [userDetails, setUserDetails] = useState();

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
    axios
      .get(
        `/user/get/${localStorage.getItem(Constants.LOCALSTORAGE_KEY_USERID)}`
      )
      .then((response) => {
        setUserDetails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isCheckoutLimitBreach = userDetails?.orderedBooks.length > 1;

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
            disabled={isCheckoutLimitBreach}
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
