import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import convertToHebrewDate from "../../ConvertToHebrewDate";
import iconProfile from "../../../Icons/profile.png";


import "./singlePublicProject.css";
const SinglePublicProject = ({ updateDetails, myProject, i }) => {
  const dd = myProject.dueDate;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(0);
  const [dueDate, setDueDate] = useState();

  const convertDate = async () => {
    console.log(myProject.dueDate + myProject.personNameFor + myProject.goal);
    const d = await convertToHebrewDate(myProject.dueDate);
    console.log(d);
    setDueDate(d);
    // const set = await !!!setDueDate(d);
    // if(set){
    //   // setIsLoading(0);
    // }  
  };
  useEffect(() => {
    // setIsLoading(1);
    convertDate();
    setIsLoading(1);
  }, []);
  const toJion = () => {
    navigate(`/projects/${myProject.projectId}`);
  };
  // if (isLoading) {
  //   return <div>...Loading</div>;
  // }
  // if (!isLoading){
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
          {isLoading ? <div>{dueDate}</div>:">"}
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

// }
export default SinglePublicProject;
