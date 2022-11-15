import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";

function EditBook() {
  const [errors, setErrors] = useState({
    title: false,
    author: false,
    genre: false,
    imageUrl: false,
  });
  const [book, setBook] = useState();
  const [inputChanged, setInputChanged] = useState(false); //detect input change to enable save button

  const { bookId } = useParams(); //get bookId from params

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/book/get/${bookId}`)
      .then((response) => setBook(response.data))
      .catch((err) => console.log("Error " + err));
  }, []);

  const titleRef = useRef();
  const authorRef = useRef();
  const isbnNumberRef = useRef();
  const genreRef = useRef();
  const imageUrlRef = useRef();
  const totalNumberOfCopiesRef = useRef();

  const handleChange = (e, value) => {
    if (e.target.value.trim() !== value) setInputChanged(true);
    else setInputChanged(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const author = authorRef.current.value.trim();
    const isbnNumber = isbnNumberRef.current.value;
    const genre = genreRef.current.value.trim();
    const totalNumberOfCopies = totalNumberOfCopiesRef.current.value;
    const imageUrl = imageUrlRef.current.value.trim();

    const errorSet = { ...errors };

    if (title && author && isbnNumber && genre && totalNumberOfCopies && imageUrl) {
      //validate fields have values to aviod overriting with empty values
      const data = {
        title,
        author,
        isbnNumber,
        genre,
        totalNumberOfCopies,
        imageUrl,
      };

      axios({
        method: "put",
        url: `/book/update/${bookId}`,
        data: data,
      })
        .then((response) => {
          if (response.data) {
            alert(title + "-- details updated");
            navigate("/admin/books");
          } else alert("Database error - failed to update book details");
        })
        .catch((err) => console.log("Error " + err));
    }

    title ? (errorSet.title = false) : (errorSet.title = true);
    author ? (errorSet.author = false) : (errorSet.author = true);
    genre ? (errorSet.genre = false) : (errorSet.genre = true);
    imageUrl ? (errorSet.imageUrl = false) : (errorSet.imageUrl = true);

    setErrors(errorSet);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-header">Edit book</h1>
      <div className="form-floating mb-2">
        <input
          type="text"
          id="title"
          className={`form-control ${errors.title ? "is-invalid" : ""}`}
          ref={titleRef}
          required
          defaultValue={book?.title}
          onChange={(e) => handleChange(e, book.title)}
        />
        <label htmlFor="title">Book title</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="text"
          id="author"
          className={`form-control ${errors.author ? "is-invalid" : ""}`}
          ref={authorRef}
          required
          defaultValue={book?.author}
          onChange={(e) => handleChange(e, book.author)}
        />
        <label htmlFor="author">Author</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="number"
          id="isbn"
          className="form-control"
          ref={isbnNumberRef}
          minLength={8}
          required
          defaultValue={book?.isbnNumber}
          onChange={(e) => handleChange(e, book.isbnNumber)}
        />
        <label htmlFor="isbn">ISBN No</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="text"
          id="genre"
          className={`form-control ${errors.genre ? "is-invalid" : ""}`}
          ref={genreRef}
          required
          defaultValue={book?.genre}
          onChange={(e) => handleChange(e, book.genre)}
        />
        <label htmlFor="genre">Genre</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="number"
          id="totalNumberOfCopies"
          className="form-control"
          ref={totalNumberOfCopiesRef}
          required
          min={0}
          defaultValue={book?.totalNumberOfCopies}
          onChange={(e) => handleChange(e, book.totalNumberOfCopies)}
        />
        <label htmlFor="totalNumberOfCopies">Copies available</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="text"
          id="imageUrl"
          className={`form-control form-file ${errors.imageUrl ? "is-invalid" : ""}`}
          ref={imageUrlRef}
          defaultValue={book?.imageUrl}
          onChange={(e) => handleChange(e, book.imageUrl)}
        />
        <label htmlFor="imageUrl">Image Url</label>
      </div>

      <div className="book-form-actions">
        <button
          disabled={!inputChanged}
          className="btn btn-primary"
          type="reset"
          onClick={() => setInputChanged(false)}
        >
          Reset
        </button>
        <button
          disabled={!inputChanged}
          type="submit"
          className="btn btn-primary book-save-button"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditBook;
