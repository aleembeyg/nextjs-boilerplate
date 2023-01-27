import axios from "axios";

export const getUsersRequest = async () => {
    debugger;
  const response: any = await axios.get(`${"api/user"}`);
  return await response.data;
};
