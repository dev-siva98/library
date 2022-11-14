import axios from "../../../axios";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import Constants from "../../../constants.json";

function ConfirmationModal({ bookDetails, show, onHide }) {
  const { id, title, author, genre, isbnNumber, imageUrl } = bookDetails;

  const handleCheckout = () => {
    axios
      .put(
        `/user/checkout/${localStorage.getItem(
          Constants.LOCALSTORAGE_KEY_USERID
        )}/${id}`
      )
      .then((response) => {
        if (!response.data) {
          alert("You already have 2 books with you!!");
        }
        onHide();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ textAlign: "center" }}>Book Details</h4>
        <div className="modal-book-container">
          <img src={imageUrl} className="card-img-top" alt="" />
          <div className="modal-book-details">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">By {author}</p>
            <p className="card-text">{genre}</p>
            <p className="card-text">Id : {id}</p>
            <p className="card-text">ISBN : {isbnNumber}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCheckout}>Confirm checkout</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
