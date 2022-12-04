import { Icon } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonAddProject = () => {
  const navigate = useNavigate();

  const addNewProject = () => {
    navigate("/projects/newProject");
  };
  return (
    <>
      <button variant="primary" onClick={addNewProject}>
      +
      </button>
    </>
  );
};
export default ButtonAddProject;
