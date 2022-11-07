import React, { useRef } from "react";
import BookCard from "./BookCard/BookCard";
import "./Home.css";
import { data } from "../../data";

function UserHome() {
  const scrollRef = useRef();

  const handleScroll = () => {
    scrollRef.current.scrollIntoView()
  };

  return (
    <div className="user-home-container">
      <div className="home-welcome">
        <h1>Welcome Siva</h1>
        <button className="btn btn-outline-info explore-button" onClick={handleScroll}>Explore</button>
      </div>
      <div ref={scrollRef} className="cards-container">
        {data.map((book) => {
          return <BookCard book={book} key={book._id} />;
        })}
      </div>
    </div>
  );
}

export default UserHome;
