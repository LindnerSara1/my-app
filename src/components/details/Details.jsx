import { useEffect, useState } from "react";
import convertToHebrewDate from "../ConvertToHebrewDate";
import ConvertToHebrewDate from "../ConvertToHebrewDate";
import "./details.css";
const Details = ({ updateDetails, myProject, i }) => {
  const [isLoaded ,setIsLoaded ] =useState(0);
  const [dueDate, setDueDate] = useState();
  const convertDate = async () => {
    const d = await convertToHebrewDate(myProject.dueDate);
    setDueDate(d);
    setIsLoaded(1);
  };
  useEffect(() => {
    convertDate();
  }, []);
  return (
    <div>
      <div>
        {/* <button onClick={displayDetails}>{myProject.projectName}</button> */}
        <div id="projectHeader">
          <div>{myProject.kategoryValue}</div>
          <div>{myProject.goal}</div>
          <div>{myProject.personNameFor}</div>
        </div>
        <div>
          <div>{dueDate}</div>
          {/* <div>{<ConvertToHebrewDate date={myProject.dueDate}/>}</div> */}
          <div>{myProject.taskStatus}</div>
        </div>
      </div>
    </div>
  );
};
export default Details;
