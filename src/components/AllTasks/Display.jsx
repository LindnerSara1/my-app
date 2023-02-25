import "./display.css";
import Select from "./select/Select";
import { useState } from "react";
import OkSelect from "./OkSelect";
const Display = (props) => {
  const { projectId, task, updateTask,allTasks,setAllTasks } = props;
  const [openSelect, setOpenSelect] = useState(false);
  const [savedInDb, setSavedInDb] = useState(false);
  const [isRender,setIsRender] = useState(true);
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
  const updateInDisplay = (newTask)=>(updateTask(newTask))

  
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
          console.log("onclick");
          setOpenSelect(true);
        }}
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
        <div>{task.kategoryValue}</div>
        <div>{isRender && task.taskStatus}</div>
      </div>
    </>
  );
};
export default Display;
