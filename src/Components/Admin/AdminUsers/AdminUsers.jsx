import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../AppContext";
import Table from "./UserTable/Table";

function AdminUsers() {
  const { isLoggedIn, isAdmin } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin || !isLoggedIn) navigate("/");
  }, []);

  return (
    <>
      <h1 className="table-header-container">Users</h1>
      <Table />
    </>
  );
}

export default AdminUsers;
