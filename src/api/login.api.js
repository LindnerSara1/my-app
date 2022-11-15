import { config } from "../../src/config";
import axios from "axios";

export const login = async (userName, password) => {
  try {
    const { data: currentUser } = await axios.post(`${config.api}/User/Login`, {
      userName,
      password,
    });
    return currentUser;
  } catch (error) {
    console.error(error);
  }
};
