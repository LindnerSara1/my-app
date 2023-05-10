import React, { useContext, useEffect } from "react";
import Profile from "./profile/Profile";
import ProjectInvited from "./projectInvited/ProjectInvited";
import ProjectManaged from "./projectManaged/ProjectManaged";
import ProjectMember from "./projectMember/ProjectMember";
import "./myHome.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/User.context";
import Header from "./header/Header";
const MyHome = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/welcome");
    }
  }, []);
  return (
    <>
      <div id="boxOfContentInMyHome">
        <Header />
        <div id="body">
          <ProjectManaged />
          <ProjectInvited />
          <div id="divProjectMember">
            <ProjectMember />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyHome;
