import React from "react";
import { Button, Modal } from "react-bootstrap";

function ConfirmationModal({ bookDetails, show, onHide }) {
  const { _id, title, author, genre, isbnNo, img } = bookDetails;

  const handleCheckout = () => {
    alert("Gotcha!!!");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ textAlign: "center" }}>Book Details</h4>
        <div className="modal-book-container">
          <img src={img} className="card-img-top" alt="" />
          <div className="modal-book-details">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">By {author}</p>
            <p className="card-text">{genre}</p>
            <p className="card-text">Id : {_id}</p>
            <p className="card-text">ISBN : {isbnNo}</p>
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
