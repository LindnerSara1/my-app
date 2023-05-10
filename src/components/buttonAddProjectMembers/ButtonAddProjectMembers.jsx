import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './ButtonAddProjectMembers.css';
import addMembers from '../../Icons/addMembers.png';
const ButtonAddProjectMembers = () => {
  const navigate = useNavigate();
    const {projectId} = useParams();
  const addNewProjectMembers = () => {
    navigate(`/addProjectMember/${projectId}`);
  };
  return (
    <>
      {/* <button > */}
      <div id="buttonAddProjectMembers" onClick={addNewProjectMembers}>
        <span className="IconNewProjectsMembers">
          <img src={addMembers}/>
        </span>
        <span className="wordsNewProjectsMembers">הזמן משתתפים</span>
      </div>
      {/* </button> */}
    </>
  );
};
export default ButtonAddProjectMembers;