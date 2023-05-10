import { config } from "../../src/config";
import axios from "axios";
// export const submitMessage = async (projectId, header, body) => {
export const submitMessage = async (projectId, header, body, dueDate) => {
  try {
    const { data: isSend } = await axios.post(
      `${config.api}/Emails/AddMessageEmail?projectId=${projectId}&header=${header}&body=${body}&dueDate=${dueDate}`
      // { projectId: projectId, header: header, : body, dueDate: dueDate }
    );
    if (isSend) {
      return isSend;
    }
  } catch (error) {
    console.log(error);
  }
};
