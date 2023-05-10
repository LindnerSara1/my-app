import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User.context";
import "./profile.css";
import iconProfile from "../../Icons/profile.png";
const Profile = () => {
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();
  const signUp = () => {
    navigate("/main/home");
  };
  return (
    <div id="divProfile" onClick={signUp}>
      <div id="headerProfile" >
        {user ? `שלום ${user.userName}` : "התחל חשבון"}
      </div>
      <img id="icon" src={iconProfile} />
      {/* <CgProfile id="iconProfile"/> */}
    </div>
  );
};
export default Profile;
