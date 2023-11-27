import React from "react";
import "./profile.css";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ProfileLogo from "../../Assets/Logos/profileLogo.png";
const Profile = () => {
  return (
    <div id="Profile">
      <div className="ProfileLogo">
        <Tooltip
          title="I am available for freelance hire."
          placement="right"
          arrow
          
        >
          <IconButton>
          <img src={ProfileLogo} alt="ProfileLogo" />
            <span className="live"></span>
          </IconButton>
        </Tooltip>
      </div>
      <div className="ProfileName">
        <h5>Om Shahane</h5>
      </div>
      <div className="ProfileDesignation">
        <p> Full Stack Web Developer</p>
        <p>  Android Developer </p>
      </div>
    </div>
  );
};

export default Profile;
