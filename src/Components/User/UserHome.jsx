import React, { useContext, useEffect, useRef, useState } from "react";
import BookCard from "./BookCard/BookCard";
import "./Home.css";
import { LoginContext } from "../../AppContext";
import Constants from "../../constants.json";
import { Link } from "react-router-dom";
import axios from "../../axios";

function UserHome() {
  const [books, setBooks] = useState([]);

  const scrollRef = useRef();

  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    axios
      .get("/book/get/all")
      .then((response) => setBooks(response.data))
      .catch((err) => console.log("Error " + err));
  });

  const handleScroll = () => {
    scrollRef.current.scrollIntoView();
  };

  return (
    // to prevent scrolling
    <div className={isLoggedIn ? "" : "user-home-container"}>
      <div className="home-welcome">
        {isLoggedIn ? (
          <>
            <h1>
              Welcome
              <span className="home-header-user">
                {localStorage.getItem(Constants.LOCALSTORAGE_TOKEN_USERNAME)}
              </span>
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
            <Link to={"/login"}>Login</Link> to checkout book !!!
          </h3>
        )}
      </div>
      <div ref={scrollRef} className="cards-container">
        {books.map((book) => {
          return <BookCard book={book} key={book.id} />;
        })}
      </div>
    </div>
  );
}

export default UserHome;
