import axios from "../../axios";
import React, { useRef, useState } from "react";
import "./AddBook.css";

function AddBook() {
  const [errors, setErrors] = useState({
    title: false,
    author: false,
    genre: false,
    img: false,
  });

  const [isbnError, setIsbnError] = useState(false);

  const titleRef = useRef();
  const authorRef = useRef();
  const isbnRef = useRef();
  const genreRef = useRef();
  const imgRef = useRef();
  const copiesRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorSet = { ...errors };

    const title = titleRef.current.value.trim();
    const author = authorRef.current.value.trim();
    const isbnNo = isbnRef.current.value;
    const genre = genreRef.current.value.trim();
    const img = imgRef.current.value.trim();
    const totalCopies = copiesRef.current.value;

    title ? (errorSet.title = false) : (errorSet.title = true);
    author ? (errorSet.author = false) : (errorSet.author = true);
    genre ? (errorSet.genre = false) : (errorSet.genre = true);
    img ? (errorSet.img = false) : (errorSet.img = true);

    setErrors(errorSet);

    if (title && author && isbnNo && genre && img && totalCopies) {
      const data = {
        title,
        author,
        isbnNo,
        genre,
        img,
        totalCopies,
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
          id="isbn"
          className={`form-control ${isbnError ? "is-invalid" : ""}`}
          required
          ref={isbnRef}
          minLength={8}
        />
        <label htmlFor="isbn">ISBN No</label>
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
          id="totalCopies"
          className="form-control"
          required
          ref={copiesRef}
          min={0}
        />
        <label htmlFor="totalCopies">Total copies</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="text"
          id="img"
          className={`form-control ${errors.img ? "is-invalid" : ""}`}
          ref={imgRef}
        />
        <label htmlFor="img">Image</label>
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
