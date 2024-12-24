import axios from "axios";
import { API_URL } from "@env";

export const getMostCommonGames = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/games?page_size=8`);
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
