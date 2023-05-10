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
        <div className="IconNewProjects">
          <AddIcon />
        </div>
        <div className="wordsNewProjects"> פרויקט חדש</div>
      </div>
      {/* </button> */}
    </>
  );
};
export default ButtonAddProject;
