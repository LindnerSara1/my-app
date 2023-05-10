import { config } from "../../src/config";
import axios from "axios";

export const getSumOfUsersInTheSystem = async () => {
  try {
    const { data: Information } = await axios.get(
      `${config.api}/Information/GetSumOfUsersInTheSystem`,
      {}
    );
    return Information;
  } catch (error) {
    console.error(error);
  }
};
export const getSumOfOpenedBooks = async () => {
  try {
    const { data: Information } = await axios.get(
      `${config.api}/Information/GetSumOfOpenedBooks`,
      {}
    );
    return Information;
  } catch (error) {
    console.error(error);
  }
};
export const getSumOfClosedBooks = async () => {
  try {
    const { data: Information } = await axios.get(
      `${config.api}/Information/GetSumOfClosedBooks`,
      {}
    );
    return Information;
  } catch (error) {
    console.error(error);
  }
};
