import https from "./https"
import axios from 'axios'
import { ENV_VARS } from "../config"

export const register = (data) => {
    return https.post('/auth/register', data)
}

export const login = (data) => {
    return axios.post(`${ENV_VARS.SERVER_URL}/auth/login`, data)
}