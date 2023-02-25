import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import convertToHebrewDate from "../../ConvertToHebrewDate";
import iconProfile from "../../../Icons/profile.png";


import "./singlePublicProject.css";
const SinglePublicProject = ({ updateDetails, myProject, i }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(1);
  const [dueDate, setDueDate] = useState();

  const convertDate = async () => {
    const d = await convertToHebrewDate(myProject.dueDate);
    const set = await !!!setDueDate(d);
    if(set){
      setIsLoading(0);
    }  
  };
  useEffect(() => {
    convertDate();
  }, []);
  const toJion = () => {
    navigate(`/projects/${myProject.projectId}`);
  };
  if (isLoading) {
    return <span>...Loading</span>;
  }
  else{
    return (
      <>
        <div id="boxProject">
          {/* <button onClick={displayDetails}>{myProject.projectName}</button> */}
          <div id="projectHeader">
            <div>{myProject.kategoryValue}</div>
            <div>{myProject.goal}</div>
            <div>{myProject.personNameFor}</div>
            {/* <div>{myProject.projectId}</div> */}
          </div>
          {/* <div> */}
          <div>{dueDate}</div>
          {/* <div>{<ConvertToHebrewDate date={myProject.dueDate}/>}</div> */}
          <div>{myProject.taskStatus}</div>
  
          <button id="buttonToJion" onClick={toJion}>
            <img id="iconProfile" src={iconProfile} />
            <div className="textJoin">הצטרף</div>
          </button>
          {/* </div> */}
        </div>
      </>
    );
  }

};
export default SinglePublicProject;
