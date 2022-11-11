import axios from "../../../../axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Row from "./Row";
import "./Table.css";
import { adminBookHeaders, adminBookBody } from "../../../../data";

function Table() {
  const [books, setBooks] = useState([]);
  const [updateComponent, setUpdateComponent] = useState(false);

  //fetch and update books after every delete and edit
  const handleUpdate = () => {
    setUpdateComponent(!updateComponent);
  };

  useEffect(() => {
    axios
      .get("/book/get/all")
      .then((response) => setBooks(response.data))
      .catch((err) => console.log("Error " + err));
  }, [updateComponent]);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {adminBookHeaders.map((header, index) => {
            return <Header header={header} key={index} />;
          })}
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => {
          return (
            <Row
              book={book}
              body={adminBookBody}
              key={index}
              //function get invoked after deleting book
              handleUpdate={handleUpdate} //state changes from child component
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
