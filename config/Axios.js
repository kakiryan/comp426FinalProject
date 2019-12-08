import axios from "axios";
import {getToken} from "./Token";

export const baseURL = 'http://localhost:3000';

export const getAxiosInstance = function (middlePath = '') {
  return axios.create({
    headers: {Authorization: `Bearer ${getToken()}`},
    baseURL: `${baseURL}${middlePath}`
  });
};