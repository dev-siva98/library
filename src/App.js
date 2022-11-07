import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
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
import { loginContext } from "./loginContext";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loggedIn = { isLoggedIn, setIsLoggedIn };

  return (
    <div className="App">
      <BrowserRouter>
        <loginContext.Provider value={loggedIn}>
          <Navbar isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
          <Routes>
            <Route index element={<Login />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/books" element={<AdminBooks />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/addbook" element={<AddBook />} />
            <Route path="/admin/editbook/:bookId" element={<EditBook />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user" element={<UserHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </loginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
