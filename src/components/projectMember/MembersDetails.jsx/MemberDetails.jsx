import AllTasks from "../../AllTasks/AllTasks";
import { useNavigate } from "react-router-dom";
const MemberDetails = ({ updateDetails, myProject, i }) => {
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
  const navigate =useNavigate();
  const allTasks= ()=>{
    navigate(`/Tasks/${myProject.projectId}`);
  }
  return (
  <>
    <div id="taskHeader">
        {/* <button onClick={displayDetails}>{myProject.k}</button> */}
        <div>{myProject.kategoryValue}</div>
        <div>{myProject.goal}</div>
        <div>{myProject.personNameFor}</div>
      </div>
        <div>
        <div>{myProject.dueDate}</div>
        <div>{myProject.taskStatus}</div>
        {/* <Link to={`Tasks/${projectId}`}>לצפייה בכל המשימות של הפרויקט</Link> */}
        <button onClick={allTasks}>לצפייה בכל המשימות של הפרויקט</button>
    </div>
    </>
    // ={navigate(`Tasks/${projectId}`)}
  );
};
export default MemberDetails;