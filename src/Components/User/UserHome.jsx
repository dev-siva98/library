import React, { useContext, useEffect, useRef, useState } from "react";
import BookCard from "./BookCard/BookCard";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import { LoginContext } from "../../AppContext";
import Constants from "../../constants.json";
import moment from "moment";

function UserHome() {
  const [books, setBooks] = useState([]);
  const [userDetails, setUserDetails] = useState();
  const [updateData, setUpdateData] = useState(false); //to trigger useEffect
  const [timeWarning, setTimeWarning] = useState(false);
  const [isCheckoutLimitBreach, setIsCheckoutLimitBreach] = useState(false);

  const navigate = useNavigate();

  const scrollRef = useRef();

  const { isLoggedIn, isAdmin } = useContext(LoginContext);

  useEffect(() => {
    if (isAdmin) navigate("/admin");
  }, [isAdmin]); // navigate if already loggedIn as admin

  useEffect(() => {
    axios
      .get("/book/get/all")
      .then((response) => setBooks(response.data))
      .catch((err) => console.log("Error " + err));
    // get updated book details to check availableCopies to update out of stock

    axios
      .get(
        `/user/get/${localStorage.getItem(Constants.LOCALSTORAGE_KEY_USERID)}`
      )
      .then((response) => {
        if (response.data) {
          setUserDetails(response.data);

          //set limit to true or false according to length of the array of books
          setIsCheckoutLimitBreach(response.data.orderedBooks.length > 1);

          //compare dates to show warning
          const dateNow = moment(new Date());

          response.data.orderedBooks.forEach((element) => {
            const dateCreated = moment(element.createdAt);
            if (dateNow.diff(dateCreated, "days") > 14) {
              //show notification
              setTimeWarning(true);

              //disable select buttons to prevent checkout of books
              setIsCheckoutLimitBreach(true);
            }
          });
        } else {
          console.log("User details fetch error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateData]); //call again to updated orders and updated copiesAvailableForCheckout

  const handleScroll = () => {
    scrollRef.current.scrollIntoView();
  };

  // to refresh useeffect
  const handleUpdateData = () => {
    setUpdateData(!updateData);
  };

  return (
    // to prevent scrolling if not loggedIn
    <div className={isLoggedIn ? "" : "user-home-container"}>
      <div className="home-welcome">
        {isLoggedIn ? (
          <>
            {timeWarning && (
              <div className="alert alert-danger time-warning-message">
                <i className="bi bi-exclamation-triangle-fill"></i>
                <p>
                  You have books pending to return
                  <Link className="text-danger" to={"/orders"}>
                    goto orders
                  </Link>
                </p>
              </div>
            )}
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
      {isLoggedIn && (
        <div ref={scrollRef} className="cards-container">
          {books.map((book) => {
            return (
              <BookCard
                book={book}
                isCheckoutLimitBreach={isCheckoutLimitBreach}
                handleUpdateData={handleUpdateData}
                userDetails={userDetails}
                key={book.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UserHome;
