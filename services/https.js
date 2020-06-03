import axios from "axios";

import { ENV_VARS } from "../config"

const http = axios.create({
  baseURL: ENV_VARS.SERVER_URL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*"
  },
});

let onUnauthorizedCallback = () => null;

export const onUnauthorized = (callback) => (onUnauthorizedCallback = callback);

const getError = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      onUnauthorizedCallback();
    }

    return Promise.reject(error.response.data);
  } else if (typeof error.json === "function") {
    return Promise.reject(error.json());
  }
  return Promise.reject(error);
};

const getData = (response) => response.data;

export const post = (link, data) => {
  return http
    .post(link, JSON.stringify(data))
    .then(getData)
    .catch((error) => {
      return getError(error);
    });
};

export const get = (link, extraHeaders = {}) => {
  const options = {
    headers: extraHeaders,
  };

  return http
    .get(link, options)
    .then(getData)
    .catch((error) => {
      return getError(error);
    });
};

export const getRawError = (link) => {
  return http.get(link).then(getData);
};


export const updateToken = (token) => {
  http.defaults.headers.common["Authorization"] = token;
};

export default http;
