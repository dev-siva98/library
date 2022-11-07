import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminBooks from "./Components/Admin/AdminBooks";
import AdminHome from "./Components/Admin/AdminHome";
import AdminOrders from "./Components/Admin/AdminOrders";
import AdminUsers from "./Components/Admin/AdminUsers";
import UserHome from "./Components/Home/UserHome";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Orders from "./Components/Orders/Orders";
import Profile from "./Components/Profile/Profile";
import Signup from "./Components/Signup/Signup";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isAdmin={isAdmin}/>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/books" element={<AdminBooks />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
