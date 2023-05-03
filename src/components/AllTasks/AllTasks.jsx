import React, { useContext, useEffect, useState } from "react";
import Display from "./Display";
import { getAllTasks } from "../../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import convertToHebrewDate from "../ConvertToHebrewDate";
import Profile from "../profile/Profile";
import { UserContext } from "../../context/User.context";
import "./allTasks.css";
import Login from "../login/Login";
import logo from "../../Image/Asset 1שותפים 2.svg";
import ProjectMember from "../projectMember/ProjectMember";
import ButtonAddProject from "../buttonAddProject/ButtonAddProject";
import ButtonAddProjectMemebers from "../buttonAddProjectMembers/ButtonAddProjectMembers";
const AllTasks = () => {
  const { projectId } = useParams();
  const [allTasks, setAllTasks] = useState([]);
  const [dueDate, setDueDate] = useState();
  const [wantToJoin, setWantToJoin] = useState(0);
  const [isLoading, setIsLoading] = useState(0);
  const [taskToInsert, setTaskToInsert] = useState();
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const getAllTasksFromServer = async () => {
    try {
      const data = await getAllTasks(projectId);
      setAllTasks(data);
      // convertDate();
    } catch (error) {
      console.error(error);
    }
  };

  const convertDate = async () => {
    const d = await convertToHebrewDate(allTasks[0].dueDate);
    setDueDate(d);
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      getAllTasksFromServer();
    }
  }, [projectId]);
  useEffect(() => {
    if (allTasks.length > 0) {
      convertDate();
    }
  }, [allTasks]);
  const updateTask = (task) => {
    const index = allTasks.findIndex((t) => t.taskId === task.taskId);
    const copyAllTasks = [...allTasks];
    copyAllTasks[index] = task;
    setAllTasks(copyAllTasks);
  };
  const setStateWantToJoin = (boolean) => {
    setWantToJoin(boolean);
  };
  const updateInListToDo = (newTask) => {
    setTaskToInsert(newTask);
    // setTaskToInsert(true);
  };
  const updateTaskStatus =(task)=>{
    const index = allTasks.findIndex(t=>t.taskId === task.taskId);
    const copyAllTasks = [...allTasks];
    copyAllTasks[index] = task;
    setAllTasks(copyAllTasks);
  }
  return (
    <>
      <div id="HeaderInAllTasks">
        <div id="HeaderLogo">
          <img id="Logo" src={logo}></img>
          <Profile />
          {allTasks.length > 0 && (
            <div id="headerContent">
              {/* <h1>all tasks</h1> */}
              {allTasks.length > 0 && <div id="gaol">{allTasks[0].goal}</div>}
              {allTasks.length > 0 && (
                <div id="personNameFor">{allTasks[0].personNameFor}</div>
              )}
              {allTasks.length > 0 && (
                <div id="dueDate">תאריך יעד {dueDate}</div>
              )}
            </div>
          )}
          <div id="explainOnColor">
            <div id="caught">
              <span className="caughtCircle"></span>
              <span className="tasksCaught">מטלות שנתפסו</span>
            </div>
            <div id="done">
              <span className="doneCircle"></span>
              <span className="tasksDone">מטלות שבוצעו</span>
            </div>
          </div>
        </div>
        {/* <div>
            <div>קטגוריה</div>
            <div>סטטוס המשימה</div>
        </div> */}
        <div id="allTasks">
          {allTasks.length > 0 &&
            allTasks.map((task, index) => (
              <div value={task} key={+index}>
                <Display
                  projectId={projectId}
                  task={task}
                  updateTask={updateTask}
                  allTasks={allTasks}
                  setAllTasks={setAllTasks}
                  updateInListToDo={updateInListToDo}
                />
              </div>
            ))}
        </div>
      </div>
      <div id="bottomPartInAllTAsks">
        {" "}
        <div id="buttonAddMemebers">
          <ButtonAddProjectMemebers />
        </div>
        <div id="buttonAddNewProject"></div>
        <ButtonAddProject />
      </div>

      <ProjectMember taskToInsert={taskToInsert} updateTaskStatus={updateTaskStatus}/>
    </>
  );
  // }
  // else {
  //   return(<>
  // <Login projectId={projectId} wantToJoin={wantToJoin} setStateWantToJoin={setStateWantToJoin}/>
  // </>
  // )}
};
export default AllTasks;
