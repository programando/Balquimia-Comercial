
import axios from "axios";

let Api = axios.create({
  baseURL: process.env.URL_API
});
 
Api.defaults.withCredentials = true;
Api.defaults.baseURL = process.env.URL_API;


//Api.defaults.headers.post['Accept'] = 'application/json'; // for POST requests
//Api.defaults.headers.post['Authorization'] = 'Bearer ' + token
/*
  
   */

export default Api;