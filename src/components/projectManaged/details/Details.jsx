import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import convertToHebrewDate from "../../ConvertToHebrewDate";
import "./details.css";
import CircularStatic from "../../circularProgress/CircularStatic";
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
  const showMoreDetails = () => {
    navigate(`/Tasks/${myProject.projectId}`);
  };
  return (
    <div>
      <div id="boxProjectManaged">
        {/* <button onClick={displayDetails}>{myProject.projectName}</button> */}
        <div id="allDetailsTaskInPM" onClick={showMoreDetails}>
          <div id="projectManagedHeader">
            <div id="theKategoryInPM">{myProject.kategoryValue}</div>
            <div id="theGoalAndThePersonNameForInPM">
              <div id="theGoalInPM">{myProject.goal}</div>
              <div id="thePersonNameForInPM">{myProject.personNameFor}</div>
            </div>
            {/* <div id="">{myProject.projectId}</div> */}
          </div>
          <div>
            <div id="theDueDateInPM">{dueDate}</div>
            {/* <div>{<ConvertToHebrewDate date={myProject.dueDate}/>}</div> */}
            <div>{myProject.taskStatus}</div>
          </div>
        </div>
        <div id="circularAndButtonSendMessage">
          <CircularStatic percentages={myProject.tasksDoneInPercentages} />

          <div id="buttonSendMessage">
            <div id="buttonSendMessageText" onClick={sendMessage}>
              שליחת הודעה
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
