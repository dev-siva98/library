import React from "react";
import "./BookCard.css";
import nagas from "../../Images/nagas.jpg";

function BookCard() {
  return (
    <div className="card-container">
      <img src={nagas} alt="hey" className="card-image" />
      <div className="card-details">
        <div className="book-details">
          <h1 className="book-header">The Secret of Nagas</h1>
          <h2 className="book-author">By Amish</h2>
          <h3 className="book-genre">Genres : Fiction</h3>
          <h3 className="book-isbn">ISBN : 99876543210</h3>
        </div>
        <div className="book-actions">
            <button>Add</button>
            <button>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
