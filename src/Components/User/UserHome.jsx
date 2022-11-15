import React, { useContext, useEffect, useRef, useState } from "react";
import BookCard from "./BookCard/BookCard";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import { LoginContext } from "../../AppContext";
import Constants from "../../constants.json";

function UserHome() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  const scrollRef = useRef();

  const { isLoggedIn, isAdmin } = useContext(LoginContext);

  useEffect(() => {
    if (isAdmin) navigate("/admin");
    axios
      .get("/book/get/all")
      .then((response) => setBooks(response.data))
      .catch((err) => console.log("Error " + err));
  }, []);

  const handleScroll = () => {
    scrollRef.current.scrollIntoView();
  };

  const userName = localStorage.getItem(Constants.LOCALSTORAGE_KEY_USERNAME);

  return (
    // to prevent scrolling if not loggedIn
    <div className={isLoggedIn ? "" : "user-home-container"}>
      <div className="home-welcome">
        {isLoggedIn ? (
          <>
            <h1>
              Welcome
              <span className="home-header-user">{userName}</span>
            </h1>
            {isAdmin}
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
      {isLoggedIn && (
        <div ref={scrollRef} className="cards-container">
          {books.map((book) => {
            return <BookCard book={book} key={book.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default UserHome;
