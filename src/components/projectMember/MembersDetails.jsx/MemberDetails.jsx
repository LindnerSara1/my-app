import AllTasks from "../../AllTasks/AllTasks";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import { updateTask } from "../../../api/tasks.api";
import "./memberDetails.css";
import convertToHebrewDate from "../../ConvertToHebrewDate";

const MemberDetails = (props) => {
  const { updateDetails, myProject, i } = props;
  const [savedInDb, setSavedInDb] = useState();
  const [dueDate, setDueDate] = useState();
  
  const convertDate = async () => {
    const d = await convertToHebrewDate(myProject.dueDate);
    setDueDate(d);
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
      updateDetails(updatedTask);
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
      <div id="allDetailsTask">
        <div id="taskHeader">
          {/* <button onClick={displayDetails}>{myProject.k}</button> */}
          <div>{myProject.kategoryValue}</div>
          <div>{myProject.goal}</div>
          <div>{myProject.personNameFor}</div>
        </div>
        <div>
          <div>{dueDate}</div>
          <div>{myProject.taskStatus}</div>
          <button onClick={isDone}>בוצע</button>
          {/* <Link to={`Tasks/${projectId}`}>לצפייה בכל המשימות של הפרויקט</Link> */}
          <button onClick={allTasks}>לצפייה בכל המשימות של הפרויקט</button>
        </div>
        {savedInDb && saved()}
      </div>
    </>
    // ={navigate(`Tasks/${projectId}`)}
  );
};
export default MemberDetails;
