import { config } from "../config";
import axios from "axios";

export const getAllTasks = async (projectId) => {
  try {
    const { data: tasks } = await axios.get(
      `${config.api}/Tasks/GetAllTasks?projectId=${projectId}`
    );
    // console.log("in api", tasks);
    return tasks;
  } catch (error) {
    console.log("unable to get All tasks", error);
  }
};
export const updateTask = async (task) => {
  const { userId, taskId, taskStatusId } = task;
  try {
    const { data: updatedTask } = await axios.put(
      `${config.api}/Tasks/UpdateTask?userId=${userId}&taskId=${taskId}&taskStatusId=${taskStatusId}`
    );
    return updatedTask;
  } catch (error) {
    console.log(error);
  }
};
