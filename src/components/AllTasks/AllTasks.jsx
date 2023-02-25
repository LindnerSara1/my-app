import React, { useContext, useEffect, useState } from "react";
import Display from "./Display";
import { getAllTasks } from "../../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import convertToHebrewDate from "../ConvertToHebrewDate";
import Profile from "../profile/Profile";
import { UserContext } from "../../context/User.context";
import "./allTasks.css";
import Login from "../login/Login";
const AllTasks = () => {
  const { projectId } = useParams();
  const [allTasks, setAllTasks] = useState([{}]);
  const [dueDate, setDueDate] = useState();
  const [wantToJoin, setWantToJoin] = useState(0);
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();
  const getAllTasksFromServer = async () => {
    try {
      const data = await getAllTasks(projectId);
      setAllTasks(data);
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
      // setStateWantToJoin(1);
      navigate("/login");
    } else {
      getAllTasksFromServer();
      convertDate();
    }
  }, []);

  const updateTask = (task) => {
    const index = allTasks.findIndex((t) => t.taskId === task.taskId);
    const copyAllTasks = [...allTasks];
    copyAllTasks[index] = task;
    setAllTasks(copyAllTasks);
  };
  const setStateWantToJoin = (boolean) => {
    setWantToJoin(boolean);
  };
  // if(!wantToJoin){
  return (
    <>
      <Profile />
      <div id="header">
        {/* <h1>all tasks</h1> */}
        <div>{allTasks[0].goal}</div>
        <div>{allTasks[0].personNameFor}</div>
        <div>תאריך יעד {dueDate}</div>

        {/* <div>
            <div>קטגוריה</div>
            <div>סטטוס המשימה</div>
        </div> */}
        <div id="allTasks">
          {allTasks?.map((task, index) => (
            <div value={task} key={+index}>
              <Display
                projectId={projectId}
                task={task}
                updateTask={updateTask}
                allTasks={allTasks}
                setAllTasks={setAllTasks}
              />
            </div>
          ))}
        </div>
      </div>
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
