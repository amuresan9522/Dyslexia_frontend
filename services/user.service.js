import axios from 'axios'

// axios.interceptors.request.use(config=>{
//     const source = axios.CancelToken.source();
//     config.cancelToken = source.token;
//     setTimeout(()=>source.cancel('Timed out after 30s'), 30000);
//     return config;
// });

import { ENV_VARS } from "../config"

export const getCurrentUser = (token) => {
    const options = {
        headers: {
            "Authorization": token
        }
    }
    return axios.get(`${ENV_VARS.SERVER_URL}/user`, options)
}

export const getUserActitvity = (token) => {
    const options = {
        headers: {
            "Authorization": token
        }
    }
    return axios.get(`${ENV_VARS.SERVER_URL}/user/activity`, options)
}

export const addUserQuizActitvity = (data, token) => {
    const options = {
        headers: {
            "Authorization": token,
            "Content-Type": 'application/json'
        }
    }
    return axios.post(`${ENV_VARS.SERVER_URL}/user/activity/quiz`,data, options)
}

export const addUserGameActitvity = (data, token) => {
    const options = {
        headers: {
            "Authorization": token,
            "Content-Type": 'application/json'
        }
    }
    return axios.post(`${ENV_VARS.SERVER_URL}/user/activity/game`,data, options)
}

export const recordGameResult = (data, token) => {
    const options = {
        headers: {
            "Authorization": token,
            "Content-Type": 'application/json'
        }
    }
    return axios.post(`${ENV_VARS.SERVER_URL}/user/activity/game/add`,data, options)
}