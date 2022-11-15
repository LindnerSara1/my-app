import { config } from "../../src/config";
import axios from "axios";

export const getKategories = async () => {
  try {
    const { data: kategories } = await axios.get(
      `${config.api}/Katekories/GetKategories`
    );
    return kategories;
  } catch (error) {
    console.error("unable to get kategories", error);
  }
};
