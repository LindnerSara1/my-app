import { config } from "../../src/config";
import axios from "axios";

export const addNewProject = async (
  managerId,
  dueDate,
  startDate,
  kategoryId,
  quantity,
  projectName,
  goal,
  personNameFor
) => {
  try {
    const { data: projectId } = await axios.post(
      `${config.api}/Projects/AddProject`,
      {
        managerId: managerId,
        dueDate: dueDate,
        startDate: startDate,
        kategoryId: kategoryId,
        quantity: quantity,
        projectName: projectName,
        goal: goal,
        personNameFor: personNameFor,
      }
    );
    if (projectId) {
      return projectId;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getProjectManaged = async (userId) => {
  try {
    const { data: project } = await axios.get(
      `${config.api}/Projects/GetManagedProjects?userId=${userId}`
    );
    if (project) {
      // console.log(project);
      return project;
    }
  } catch (error) {
    console.error(error);
  }
};
export const getProjectMember = async (userId) => {
  try {
    const { data: tasks } = await axios.get(
      `${config.api}/Projects/GetMemberProjects?userId=${userId}`
    );
    if (tasks) {
      // console.log(tasks);
      return tasks;
    }
  } catch (error) {
    console.error(error);
  }
};
export const addEmails = async (projectId, emails) => {
  try {
    const { data: users } = await axios.post(
      `${config.api}/Projects/AddUsers`,
      {
        projectId: projectId,
        emails: emails,
      }
    );
    if (users) {
      // console.log(users);
      return users;
    }
  } catch (error) {
    console.log(error);
  }
};
