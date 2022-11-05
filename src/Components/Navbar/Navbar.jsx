import React from "react";
import './Navbar.css'
import avatar from '../Images/avatar.png'

function Navbar() {
  return <nav class="navbar navbar-dark bg-dark">
    <div className="nav-logo">
      Library Management
    </div>
    <div className="nav-items">
      <p className="nav-link">Home</p>
      <p className="nav-link">Checkout</p>
      <img className="nav-link nav-avatar" src={avatar} alt="" />
    </div>
  </nav>;
}

export default Navbar;
