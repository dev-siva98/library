import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Constants from "./constants.json";
import AddBook from "./Components/AddBook/AddBook";
import AdminBooks from "./Components/Admin/AdminBooks";
import AdminHome from "./Components/Admin/AdminHome";
import AdminOrders from "./Components/Admin/AdminOrders";
import AdminUsers from "./Components/Admin/AdminUsers";
import EditBook from "./Components/EditBook/EditBook";
import UserHome from "./Components/User/UserHome";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Orders from "./Components/Orders/Orders";
import Profile from "./Components/Profile/Profile";
import Signup from "./Components/Signup/Signup";
import { LoginContext } from "./AppContext";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(
      JSON.parse(localStorage.getItem(Constants.LOCALSTORAGE_TOKEN_ISLOGGEDIN))
    );

    setIsAdmin(
      localStorage.getItem(
        Constants.LOCALSTORAGE_TOKEN_USERTYPE === Constants.USERTYPE_ADMIN
      )
    );
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext.Provider value={{ isAdmin, isLoggedIn, setIsLoggedIn }}>
          <Navbar isAdmin={isAdmin} />
          <Routes>
            <Route index element={<Login />} />
            <Route path="/admin" element={<AdminHome isAdmin={isAdmin} />} />
            <Route
              path="/admin/books"
              element={<AdminBooks isAdmin={isAdmin} />}
            />
            <Route
              path="/admin/users"
              element={<AdminUsers isAdmin={isAdmin} />}
            />
            <Route
              path="/admin/orders"
              element={<AdminOrders isAdmin={isAdmin} />}
            />
            <Route
              path="/admin/addbook"
              element={<AddBook isAdmin={isAdmin} />}
            />
            <Route
              path="/admin/editbook/:bookId"
              element={<EditBook isAdmin={isAdmin} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<UserHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
