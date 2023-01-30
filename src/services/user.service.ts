import axios from "axios";
export const getUsersRequest = async () => {
  const response: any = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL + "?results=12&gneder=female"}`
  );
  return await response.data;
};
