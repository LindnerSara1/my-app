import React from "react";
import Profile from "./profile/Profile";
import ProjectManaged from "./projectManaged/ProjectManaged";
import ProjectMember from "./projectMember/ProjectMember";

const MyHome = () => {
  return <><h1>MyHome!</h1>
  <Profile />
  <ProjectManaged></ProjectManaged>
  <ProjectMember></ProjectMember>
  </>;
};
export default MyHome;
