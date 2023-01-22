import React, { useState, useContext } from "react";

import {CgProfile} from 'react-icons/cg'
import { UserContext } from "../../context/User.context";
import './profile.css';
const Profile = () => {
  const { setUser, user } = useContext(UserContext);
  return (
    <div id="divProfile">
    <div id="headerProfile">
      <div>שלום</div>
      {user?user.userName:"אורח"}
    </div>
    <CgProfile id="iconProfile"/>
    </div>
  );
};
export default Profile;
