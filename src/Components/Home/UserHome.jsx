import React from "react";
import BookCard from "./BookCard/BookCard";
import './Home.css'

function UserHome() {
  return (
    <div className="user-home-container">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />

    </div>
  );
}

export default UserHome;
