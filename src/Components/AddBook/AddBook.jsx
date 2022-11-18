import axios from "../../axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./AddBook.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../AppContext";

function AddBook() {
  const [errors, setErrors] = useState({
    title: false,
    author: false,
    genre: false,
    imageUrl: false,
  });

  const [isbnError, setIsbnError] = useState(false);

  const { isLoggedIn, isAdmin } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin || !isLoggedIn) navigate("/");
  }, []);

  const titleRef = useRef();
  const authorRef = useRef();
  const isbnNumberRef = useRef();
  const genreRef = useRef();
  const imageUrlRef = useRef();
  const totalNumberOfCopiesRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorSet = { ...errors };

    const title = titleRef.current.value.trim();
    const author = authorRef.current.value.trim();
    const isbnNumber = isbnNumberRef.current.value;
    const genre = genreRef.current.value.trim();
    const imageUrl = imageUrlRef.current.value.trim();
    const totalNumberOfCopies = totalNumberOfCopiesRef.current.value;

    title ? (errorSet.title = false) : (errorSet.title = true);
    author ? (errorSet.author = false) : (errorSet.author = true);
    genre ? (errorSet.genre = false) : (errorSet.genre = true);
    imageUrl ? (errorSet.image = false) : (errorSet.image = true);

    setErrors(errorSet);

    if (
      title &&
      author &&
      isbnNumber &&
      genre &&
      imageUrl &&
      totalNumberOfCopies
    ) {
      const data = {
        title,
        author,
        isbnNumber,
        genre,
        imageUrl,
        totalNumberOfCopies,
      };

      axios({
        method: "post",
        url: "/book/addbook",
        data: data,
      })
        .then((response) => {
          if (response.data) {
            setIsbnError(false);
            alert(title + " added");
          } else setIsbnError(true);
        })
        .catch((err) => console.log("Error " + err));
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-header">Add book</h1>
      <div className="form-error-container">
        {isbnError && <p>This book is already added</p>}
      </div>
      <div className="form-floating mb-2">
        <input
          type="text"
          id="title"
          className={`form-control ${errors.title ? "is-invalid" : ""}`}
          required
          ref={titleRef}
        />
        <label htmlFor="title">Book title</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="text"
          id="author"
          className={`form-control ${errors.author ? "is-invalid" : ""}`}
          required
          ref={authorRef}
        />
        <label htmlFor="author">Author</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="number"
          id="isbnNumber"
          className={`form-control ${isbnError ? "is-invalid" : ""}`}
          required
          ref={isbnNumberRef}
          minLength={8}
        />
        <label htmlFor="isbnNumber">ISBN No</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="text"
          id="genre"
          className={`form-control ${errors.genre ? "is-invalid" : ""}`}
          required
          ref={genreRef}
        />
        <label htmlFor="genre">Genre</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="number"
          id="totalNumberOfCopies"
          className="form-control"
          required
          ref={totalNumberOfCopiesRef}
          min={0}
        />
        <label htmlFor="totalNumberOfCopies">Total copies</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="text"
          id="imageUrl"
          className={`form-control ${errors.imageUrl ? "is-invalid" : ""}`}
          ref={imageUrlRef}
        />
        <label htmlFor="imageUrl">Image</label>
      </div>

      <div className="book-form-actions">
        <button className="btn btn-primary book-reset-button" type="reset">
          Reset
        </button>
        <button type="submit" className="btn btn-primary book-save-button">
          Save
        </button>
      </div>
    </form>
  );
}

export default AddBook;
