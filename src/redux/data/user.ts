import axios from "axios";

export const getUsersRequest = async () => {
  const response: any = await axios.get(`${"api/user"}`);
  return await response.data;
};
