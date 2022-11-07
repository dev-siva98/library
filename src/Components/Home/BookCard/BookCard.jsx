import React from "react";
import "./BookCard.css";

function BookCard({ book }) {
  const { _id, title, author, isbnNo, genre, img } = book;
  return (
    <div className="card book-card">
      <img className="card-img-top" src={img} alt="book" />
      <div className="card-body book-card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">By {author}</p>
        <p className="card-text">{genre}</p>
        <p className="card-text">Id : {_id}</p>
        <p className="card-text">ISBN : {isbnNo}</p>
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
}

export default BookCard;
