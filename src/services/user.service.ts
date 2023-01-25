import { axiosInstance } from "./axiosInterceptor"

export const getUsersRequest = async () => {
    const response:any = await axiosInstance.get("?results=12&gneder=female");
    return await response.data;
}