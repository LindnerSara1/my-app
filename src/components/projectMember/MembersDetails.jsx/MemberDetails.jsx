import AllTasks from "../../AllTasks/AllTasks";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { updateTask } from "../../../api/tasks.api";
import "./memberDetails.css";
import convertToHebrewDate from "../../ConvertToHebrewDate";
import DoneIcon from "@mui/icons-material/Done";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircularStatic from "../../circularProgress/CircularStatic";

const MemberDetails = (props) => {
  const { updateDetails, myProject, i } = props;
  const [savedInDb, setSavedInDb] = useState();
  const [dueDate, setDueDate] = useState(0);
  const [hebrewDate, setHebrewDate] = useState(0);
  const convertDate = async () => {
    setHebrewDate(0);
    const d = await convertToHebrewDate(myProject.dueDate);
    console.log(d);
    setDueDate(d);
    setHebrewDate(1);
  };
  useEffect(() => {
    convertDate();
  }, []);
  console.log(myProject);
  let project = {
    taskId: "",
    userId: "",
  };
  const displayDetails = () => {
    project.taskId = myProject.taskId;
    project.userId = myProject.userId;
    updateDetails(project);
  };
  const navigate = useNavigate();
  const allTasks = () => {
    navigate(`/Tasks/${myProject.projectId}`);
  };
  const isDone = async () => {
    myProject.taskStatusId = 3;
    const updatedTask = await updateTask(myProject);
    if (updatedTask) {
      setSavedInDb(true);
      setTimeout(() => {
        updateDetails(updatedTask);
      }, 3000);
    }
  };
  const saved = () => {
    swal({
      title: "נקלט בהצלחה",
      text: "זכית להיות חלק משותפים+  אשריך!",
      icon: "success",
      button: "ok",
    });
  };
  return (
    <>
      <div id="allDetailsTaskMD" >
        <div id="taskHeaderInProjectMemberMD" onClick={allTasks}>
          {/* <button onClick={displayDetails}>{myProject.k}</button> */}
          <div id="#theKategoryMD">{myProject.kategoryValue}</div>
          <div id="theGoalAndThePersonNameForMD">
            <div id="#theGoalMD">{myProject.goal}</div>
            <div id="#thePersonNameForMD">{myProject.personNameFor}</div>
          </div>
        </div>
          {hebrewDate != 0 && <div id="theDueDateMD">{dueDate}</div>}
          {/* <div>{myProject.taskStatus}</div> */}
        <div id="circularAndButtonIsDone">
          <CircularStatic percentages={myProject.tasksDoneInPercentages} />
          <div
            id="buttonIsDoneMD"
            onClick={() => {
              myProject.taskStatusId === 2 && isDone();
            }}
          >
            <div id="iconV">
              {/* <RadioButtonUncheckedIcon/> */}
              {myProject.taskStatusId === 3 && <DoneIcon />}
            </div>
            <div className="textIsDone">בוצע</div>
          </div>
          {/* <Link to={`Tasks/${projectId}`}>לצפייה בכל המשימות של הפרויקט</Link> */}
          {/* <button onClick={allTasks}>לצפייה בכל המשימות של הפרויקט</button> */}
        </div>
        {/* {savedInDb && saved()} */}
      </div>
    </>
    // ={navigate(`Tasks/${projectId}`)}
  );
};
export default MemberDetails;
