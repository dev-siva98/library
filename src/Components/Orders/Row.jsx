import React, { useState } from "react";

function Row({ data }) {
  const [rowData, setRowData] = useState(data);

  const { _id, bookId, img, date, expiry, returnDate } = rowData;

  const handleReturn = () => {
    setRowData((prevData) => {
      return { ...prevData, returnDate: "06-11-2022" };
    });
  };

  return (
    <tr>
      <th scope="row">{_id}</th>
      <td>{bookId}</td>
      <td>
        <img
          src={img}
          style={{ width: "100px", borderRadius: "50%" }}
          alt="img"
        />
      </td>
      <td>{date}</td>
      <td>{expiry}</td>
      <td>
        {returnDate ? (
          returnDate
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
