import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Constants from "./constants.json";
import AddBook from "./Components/AddBook/AddBook";
import AdminBooks from "./Components/Admin/AdminBooks/AdminBooks";
import AdminHome from "./Components/Admin/AdminHome";
import AdminUsers from "./Components/Admin/AdminUsers/AdminUsers";
import EditBook from "./Components/EditBook/EditBook";
import UserHome from "./Components/User/UserHome";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Orders from "./Components/Orders/Orders";
import Signup from "./Components/Signup/Signup";
import { LoginContext } from "./AppContext";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(
      JSON.parse(localStorage.getItem(Constants.LOCALSTORAGE_KEY_ISLOGGEDIN))
    );

    setIsAdmin(
      localStorage.getItem(Constants.LOCALSTORAGE_KEY_USER_ROLE) ===
        Constants.USERTYPE_ADMIN
    );
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext.Provider
          value={{ isAdmin, setIsAdmin, isLoggedIn, setIsLoggedIn }}
        >
          <Navbar />
          <Routes>
            <Route index element={<UserHome />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/books" element={<AdminBooks />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/addbook" element={<AddBook />} />
            <Route path="/admin/editbook/:bookId" element={<EditBook />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
