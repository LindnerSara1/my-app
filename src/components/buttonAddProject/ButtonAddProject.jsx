import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonAddProject.style.css";
import AddIcon from "@mui/icons-material/Add";
const ButtonAddProject = () => {
  const navigate = useNavigate();

  const addNewProject = () => {
    navigate("/projects/newProject");
  };
  return (
    <>
      {/* <button > */}
      <div id="buttonAddProject" onClick={addNewProject}>
        <span className="IconNewProjects">
          <AddIcon />
        </span>
        <span className="wordsNewProjects"> פרויקט חדש</span>
      </div>
      {/* </button> */}
    </>
  );
};
export default ButtonAddProject;
