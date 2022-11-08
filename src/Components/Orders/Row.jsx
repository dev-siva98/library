import React, { useState } from "react";

function Row({ data }) {
  const [rowData, setRowData] = useState(data);

  const handleReturn = () => {
    setRowData((prevData) => {
      return { ...prevData, returnDate: "06-11-2022" };
    });
  };

  return (
    <tr>
      <th scope="row">{rowData._id}</th>
      <td>{rowData.bookId}</td>
      <td>
        <img
          src={rowData.img}
          style={{ width: "100px", borderRadius: "50%" }}
          alt="img"
        />
      </td>
      <td>{rowData.date}</td>
      <td>{rowData.expiry}</td>
      <td>
        {rowData.returnDate ? (
          rowData.returnDate
        ) : (
          <button onClick={handleReturn} className="btn btn-primary">
            Return now
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-primary">view</button>
      </td>
    </tr>
  );
}

export default Row;
