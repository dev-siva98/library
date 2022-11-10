import React, { useContext, useRef } from "react";
import BookCard from "./BookCard/BookCard";
import "./Home.css";
import { books } from "../../data";
import { LoginContext } from "../../AppContext";
import Constants from "../../constants.json";
import { Link } from "react-router-dom";

function UserHome() {
  const scrollRef = useRef();

  const { isLoggedIn } = useContext(LoginContext);

  const handleScroll = () => {
    scrollRef.current.scrollIntoView();
  };

  return (
    <div className={isLoggedIn ? "" : "user-home-container"}>
      <div className="home-welcome">
        {isLoggedIn ? (
          <>
            <h1>
              Welcome
              {localStorage.getItem(Constants.LOCALSTORAGE_TOKEN_USERNAME)}
            </h1>
            <button
              className="btn btn-outline-info explore-button"
              onClick={handleScroll}
            >
              Explore
            </button>
          </>
        ) : (
          <h3>
            <Link to={"/"}>Login</Link> to checkout book !!!
          </h3>
        )}
      </div>
      <div ref={scrollRef} className="cards-container">
        {books.map((book) => {
          return <BookCard book={book} key={book._id} />;
        })}
      </div>
    </div>
  );
}

export default UserHome;
