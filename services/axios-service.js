import axios from 'axios';
axios.interceptors.request.use(
  config => {
    config.baseURL ="https://dummyjson.com/"
    return config;
  }
);
let responseResolve = (response) => {
  return response;
};
axios.interceptors.response.use(
  response => responseResolve(response),
);
export default axios;