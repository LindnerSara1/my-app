import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import convertToHebrewDate from "../../ConvertToHebrewDate";
import "./details.css";
const Details = ({ updateDetails, myProject, i }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(1);
  const [dueDate, setDueDate] = useState();
  const convertDate = async () => {
    const d = await convertToHebrewDate(myProject.dueDate);
    setDueDate(d);
    setIsLoading(0);
  };
  useEffect(() => {
    convertDate();
  }, []);
  const sendMessage = () => {
    navigate(`/projects/addNewMessage/${myProject.projectId}`);
  };
  if (isLoading) {
    return <span>...Loading</span>;
  } else {
    return (
      <div>
        <div id="boxProjectManaged">
          {/* <button onClick={displayDetails}>{myProject.projectName}</button> */}
          <div id="projectManagedHeader">
            <div id="theKategory">{myProject.kategoryValue}</div>
            <div id="theGoalAndThePersonNameFor">
              <div id="theGoal">{myProject.goal}</div>
              <div id="thePersonNameFor">{myProject.personNameFor}</div>
            </div>
            {/* <div id="">{myProject.projectId}</div> */}
          </div>
          <div>
            <div id="theDueDate">{dueDate}</div>
            {/* <div>{<ConvertToHebrewDate date={myProject.dueDate}/>}</div> */}
            <div>{myProject.taskStatus}</div>
            <button onClick={sendMessage}>לשליחת הודעה לחברי הפרויקט</button>
          </div>
        </div>
      </div>
    );
  }
};
export default Details;
