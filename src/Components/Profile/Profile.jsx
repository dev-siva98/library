import React, { useState } from "react";
import EditProfle from "./EditProfile/EditProfle";
import "./Profile.css";
import Constants from "../Constants/constants.json";
import Orders from "./Orders/Orders";

function Profile() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="settings-container">
      <div className="sidebar">
        <div className="profile-details">
          <img
            className="profile-avatar"
            src={Constants.AVATAR_URL}
            alt="profile"
          />
          <h1 className="profile-name">Siva</h1>
          <p className="profile-joined">
            Joined <span>November 04, 2022</span>
          </p>
        </div>
        <div className="sidebar-nav">
          <p
            className={`sidebar-link ${toggleSidebar ? "" : "active"} `}
            onClick={() => setToggleSidebar(false)}
          >
            Orders
          </p>
          <p
            className={`sidebar-link ${toggleSidebar ? "active" : ""} `}
            onClick={() => setToggleSidebar(true)}
          >
            Settings
          </p>
        </div>
      </div>
      {toggleSidebar ? <EditProfle /> : <Orders />}
    </div>
  );
}

export default Profile;
