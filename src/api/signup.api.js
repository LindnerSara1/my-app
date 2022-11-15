import { config } from "../../src/config";
import axios from "axios";

export const signUp = async (userName, userPassword, usermail, userPhone) => {
  try {
    const { data: user } = await axios.post(`${config.api}/User/CreateEntity`, {
      userName,
      userPassword,
      usermail,
      userPhone,
    });
    return user;
  } catch (error) {
    console.log(error);
    alert("error to create a new user");
  }
};
