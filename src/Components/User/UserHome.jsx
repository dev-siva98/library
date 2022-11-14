import React, { useContext, useEffect, useRef, useState } from "react";
import BookCard from "./BookCard/BookCard";
import "./Home.css";
import { LoginContext } from "../../AppContext";
import Constants from "../../constants.json";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";

function UserHome() {
  const [books, setBooks] = useState([]);
  const [userDetails, setUserDetails] = useState();

  const navigate = useNavigate();

  const scrollRef = useRef();

  const { isLoggedIn, isAdmin } = useContext(LoginContext);

  useEffect(() => {
    if (isAdmin) navigate("/admin");

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

    axios
      .get("/book/get/all")
      .then((response) => setBooks(response.data))
      .catch((err) => console.log("Error " + err));
  }, []);

  const handleScroll = () => {
    scrollRef.current.scrollIntoView();
  };

  return (
    // to prevent scrolling if not loggedIn
    <div className={isLoggedIn ? "" : "user-home-container"}>
      <div className="home-welcome">
        {isLoggedIn ? (
          <>
            <h1>
              Welcome
              <span className="home-header-user">{userDetails?.userName}</span>
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
      <div ref={scrollRef} className="cards-container">
        {books.map((book) => {
          return (
            <BookCard book={book} userDetails={userDetails} key={book.id} />
          );
        })}
      </div>
    </div>
  );
}

export default UserHome;
