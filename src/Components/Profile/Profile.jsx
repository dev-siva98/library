import React from "react";
import EditProfle from "./EditProfile/EditProfle";
import "./Profile.css";
import Constants from "../Constants/constants.json";

function Profile() {

  return (
    <div className="profile-container">
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
            className={"sidebar-link active"}
          >
            Settings
          </p>
        </div>
      </div>
      <EditProfle/>
    </div>
  );
}

export default Profile;
