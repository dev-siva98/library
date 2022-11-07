import React, { useEffect, useRef, useState } from "react";
import { books } from "../../data";
import { useParams } from "react-router-dom";
function EditBook() {
  const [errors, setErrors] = useState({
    title: false,
    author: false,
    genre: false,
  });
  const [book, setBook] = useState();
  const [inputChanged, setInputChanged] = useState(false); //detect input change to enable save button
  const { bookId } = useParams(); //get bookId from params

  useEffect(() => {
    books.forEach((book) => {
      if (book._id === bookId) setBook(book);
    });
  }, []);

  const titleRef = useRef();
  const authorRef = useRef();
  const isbnRef = useRef();
  const genreRef = useRef();
  const imgRef = useRef();
  const copiesRef = useRef();

  const handleChange = (e, value) => {
    if (e.target.value.trim() != value) setInputChanged(true);
    else setInputChanged(false);
  };

  const handleImageChange = () => {
    if (imgRef.current.value) setInputChanged(true);
    else setInputChanged(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const author = authorRef.current.value.trim();
    const isbnNo = isbnRef.current.value;
    const genre = genreRef.current.value.trim();
    const copies = copiesRef.current.value;
    const img = imgRef.current.value;

    const errorSet = { ...errors };

    if (title && author && isbnNo && genre && copies) {
      //validate fields have values to aviod overriting with empty values
      const data = {
        title,
        author,
        isbnNo,
        genre,
        copies,
        img: img ? img : book.img,
      };
      console.log(data);
    }

    title ? (errorSet.title = false) : (errorSet.title = true);
    author ? (errorSet.author = false) : (errorSet.author = true);
    genre ? (errorSet.genre = false) : (errorSet.genre = true);

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
          id="copies"
          className="form-control"
          ref={copiesRef}
          required
          min={0}
          defaultValue={book?.copies}
          onChange={(e) => handleChange(e, book.copies)}
        />
        <label htmlFor="copies">Copies available</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="file"
          id="img"
          accept="image/*"
          className={`form-control form-file ${errors.img ? "is-invalid" : ""}`}
          ref={imgRef}
          defaultValue={book?.img}
          onChange={handleImageChange}
        />
        <label htmlFor="img">Image</label>
      </div>

      <div className="form-action-container">
        <button
          disabled={!inputChanged}
          type="submit"
          className="btn btn-primary"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditBook;
