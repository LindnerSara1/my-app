import { config } from "../../src/config";
import axios from "axios";
export const submitMessage = async (Message) => {
  const { projectId, header, body, dueDate } = Message;
  try {
    const { date: isSend } = await axios.post(
      `${config.api}/Emails/AddMessageEmail`,
      { projectId: projectId, header: header, body: body, dueDate: dueDate }
    );
    if(isSend){
      return isSend;
    }
  } catch (error) {
    console.log(error);
  }
};
