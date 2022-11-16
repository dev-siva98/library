import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Constants from "../../constants.json";
import Row from "./Row";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [updateData, setUpdateData] = useState(false);

  useEffect(() => {
    axios
      .get(
        `/user/get/${localStorage.getItem(Constants.LOCALSTORAGE_KEY_USERID)}`
      )
      .then((response) => {
        console.log(response);
        if (response.data) setOrders(response.data.orderedBooks);
        else alert("Error fetching details");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateData]);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Book Id</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Image</th>
          <th scope="col">Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((book) => {
          return (
            <Row
              book={book}
              key={book.bookId}
              setUpdateData={() => setUpdateData(!updateData)}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Orders;
