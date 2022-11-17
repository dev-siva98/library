import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./Orders.css";

function Row({ book, setUpdateData }) {
  const [bookDetails, setBookDetails] = useState();

  const { bookId, createdAt } = book;

  useEffect(() => {
    axios
      .get(`/book/get/${bookId}`)
      .then((response) => {
        setBookDetails(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleReturn = () => {
    if (window.confirm(`Return ${bookId} ?`)) {
      axios
        .put(`/user/checkin/${localStorage.getItem("userId")}/${bookId}`)
        .then(() => {
          setUpdateData();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const localDateString = new Date(createdAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  return (
    <tr>
      <th scope="row">{bookId}</th>
      <td>{bookDetails?.title}</td>
      <td>{bookDetails?.author}</td>
      <td>
        <img
          className="user-order-image"
          src={bookDetails?.imageUrl}
          alt="img"
        />
      </td>
      <td className="user-order-date">{localDateString}</td>
      <td>
        <button onClick={handleReturn} className="btn btn-primary">
          Return now
        </button>
      </td>
    </tr>
  );
}

export default Row;
