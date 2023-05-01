import "./display.css";
import Select from "./select/Select";
import { useContext, useState } from "react";
import OkSelect from "./OkSelect";
import {
  NEW_TASK,
  TASKS_CAUGHT,
  TASKS_DONE,
} from "../../constant/colorConstant";
import { UserContext } from "../../context/User.context";
const Display = (props) => {
  const { projectId, task, updateTask, allTasks, setAllTasks } = props;
  const { setUser, user } = useContext(UserContext);
  const [openSelect, setOpenSelect] = useState(false);
  const [savedInDb, setSavedInDb] = useState(false);
  const [isRender, setIsRender] = useState(true);
  // const updateTaskInDisplay = (task) => {
  //   console.log("in updateTaskInDisplay task");
  //   console.log(task);
  //   const index = allTasks.findIndex((t) => t.taskId === task.taskId);
  //   const copyAllTasks = [...allTasks];
  //   copyAllTasks[index].userId = task.userId;
  //   copyAllTasks[index].taskStatusId = task.taskStatusId;
  //   console.log("ok");
  //   setIsRender(task.taskStatusId);
  //   setAllTasks([...copyAllTasks]);
  // };
  const updateInDisplay = (newTask) => updateTask(newTask);

  const typeColor = {
    1: NEW_TASK,
    2: TASKS_CAUGHT,
    3: TASKS_DONE,
  };
  return (
    <>
      {/* <div id="#displayTask">
        <div>{myTask.kategoryValue}</div>
        <div>{myTask.goal}</div>
        <div>{myTask.personNameFor}</div>
        <div>{myTask.taskStatus}</div>
        <div>{myTask.dueDate}</div>
      </div> */}
      <div
        id="singleTask"
        onClick={() => {
          if(task.taskStatusId == 1 ){setOpenSelect(true);}
        }}
        style={{ backgroundColor: typeColor[task.taskStatusId],padding:3,borderRadius: 21}}
      >
        {openSelect && (
          <Select
            projectId={projectId}
            task={task}
            openSelect={openSelect}
            setOpenSelect={setOpenSelect}
            savedInDb={savedInDb}
            setSavedInDb={setSavedInDb}
            updateInDisplay={updateInDisplay}
          />
        )}
        {savedInDb && (
          <OkSelect savedInDb={savedInDb} setSavedInDb={setSavedInDb} />
        )}
        <div id="taskKategory">{task.kategoryValue}</div>
        {user.userId == task.mangerId && <div id="taskStatus">{isRender && task.userName}</div>}
        {/* <div id="taskStatus">{isRender && task.taskStatus}</div> */}
      </div>
    </>
  );
};
export default Display;
