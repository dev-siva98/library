import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";
function EditBook() {
  const [errors, setErrors] = useState({
    title: false,
    author: false,
    genre: false,
    img: false,
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
  const isbnRef = useRef();
  const genreRef = useRef();
  const imgRef = useRef();
  const totalCopiesRef = useRef();

  const handleChange = (e, value) => {
    if (e.target.value.trim() !== value) setInputChanged(true);
    else setInputChanged(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const author = authorRef.current.value.trim();
    const isbnNo = isbnRef.current.value;
    const genre = genreRef.current.value.trim();
    const totalCopies = totalCopiesRef.current.value;
    const img = imgRef.current.value.trim();

    const errorSet = { ...errors };

    if (title && author && isbnNo && genre && totalCopies && img) {
      //validate fields have values to aviod overriting with empty values
      const data = {
        title,
        author,
        isbnNo,
        genre,
        totalCopies,
        img,
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
    img ? (errorSet.img = false) : (errorSet.img = true);

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
          ref={isbnRef}
          minLength={8}
          required
          defaultValue={book?.isbnNo}
          onChange={(e) => handleChange(e, book.isbnNo)}
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
          id="totalCopies"
          className="form-control"
          ref={totalCopiesRef}
          required
          min={0}
          defaultValue={book?.totalCopies}
          onChange={(e) => handleChange(e, book.totalCopies)}
        />
        <label htmlFor="totalCopies">Copies available</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="text"
          id="img"
          className={`form-control form-file ${errors.img ? "is-invalid" : ""}`}
          ref={imgRef}
          defaultValue={book?.img}
          onChange={(e) => handleChange(e, book.img)}
        />
        <label htmlFor="img">Image Url</label>
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
