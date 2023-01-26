import ApiClient from "@/services/axiosInterceptor";

export const getUsersRequest = async () => {
    console.log(ApiClient.getUri())
    const response:any = await ApiClient.get("?results=12&gneder=female");
    return await response.data;
}