import React, { useContext, useEffect, useState } from "react";
import Profile from "./profile/Profile";
import ProjectInvited from "./projectInvited/ProjectInvited";
import ProjectManaged from "./projectManaged/ProjectManaged";
import ProjectMember from "./projectMember/ProjectMember";
import "./myHome.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/User.context";
import Header from "./header/Header";
import ButtonAddProject from "./buttonAddProject/ButtonAddProject";
import AddIcon from "@mui/icons-material/Add";
import HamburgerMenu from "./header/menu/hamburgerMenu/HamburgerMenu";
const MyHome = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);
  const [mouseIn, setMouseIn] = useState(false);
  useEffect(() => {
    if (!user) {
      navigate("/welcome");
    }
  }, []);
  const mouseEnter = () => setMouseIn(true);

  const mouseLeave = () => setMouseIn(false);
  const changeMouse = (mouse) => {
    setMouseIn(!mouse);
  };
  const addNewProject = () => {
    navigate("/projects/newProject");
  };
  return (
    <>
      <div id="boxOfContentInMyHome">
        <Header />
        <div id="menuInHeader">
          <HamburgerMenu />
        </div>
        <div id="body">
          {/* <div id="buttonAddProjectInMyHome" onClick={addNewProject}> */}
          {/* <div
              id="iconPlus"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              // onMouseEnter={mouseEnter}
              // onMouseLeave={mouseLeave}
              onClick={addNewProject}
            > */}{" "}
          {/* <AddIcon sx={{ color: "white" }} />
              {mouseIn && (
                <div
                  onClick={addNewProject}
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                > */}
          {/* פרויקט חדש */}
          {/* </div> */}
          {/* )} */}
          {/* </div> */}
          {/* {mouseIn && (
              <div id="ButtonAddProjectInMyHomeWithLabel">
                פרויקט חדש
                {/* </div> */}
          {/* )}  */}
          <div id="buttonAddProjectInMyHome">
            <ButtonAddProject />
          </div>
          {/* </div> */}
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
