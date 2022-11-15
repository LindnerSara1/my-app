import { config } from "../../src/config";
import axios from "axios";

// const params = {
//   ManagerId: 0,
//   DueDate: "",
//   StartDate: "",
//   KategoryId: "",
//   Quantity: 0,
//   ProjectName: "",
//   Goal: "",
//   PersonNameFor: "",
// }
// const convertDateToSend =(newProjectParams)=>{
//   params.ManagerId = newProjectParams.ManagerId;
//   params.DueDate = newProjectParams.DueDate;
//   params.StartDate = newProjectParams.StartDate;
//   params.KategoryId = newProjectParams.KategoryId;
//   params.Quantity = newProjectParams.Quantity;
//   params.ProjectName = newProjectParams.ProjectName;
//   params.Goal = newProjectParams.Goal;
//   params.PersonNameFor = newProjectParams.PersonNameFor;
// }
export const addNewProject = async (newProjectParams) => {
  // const paramsToSend = convertDateToSend(newProjectParams);
  try {
    const { data: project } = await axios.post(
      `${config.api}/Projects/AddProject`,
      newProjectParams
    );
    if (project) {
      return project;
    }
  } catch (error) {
    console.error(error);
  }
};
