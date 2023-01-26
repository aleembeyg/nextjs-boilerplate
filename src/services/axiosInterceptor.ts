import axios from "axios";

const ApiClient = () => {
  debugger;
  const instance = axios.create({ baseURL: process.env.API_URL });
  instance.interceptors.request.use((request) => {
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(`error`, error);
    }
  );

  return instance;
};

export default ApiClient();
