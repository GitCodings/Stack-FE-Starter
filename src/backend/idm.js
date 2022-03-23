import {baseUrl, idm} from "backend/config.json";
import Axios from "axios";


export async function login(loginRequest) {
    const payLoad = {
        email: loginRequest.email,
        password: loginRequest.password
    };

    const options = {
        baseURL: baseUrl, // Base URL
        url: idm.login, // Path of URL
        data: payLoad // Data to send in Body
    }

    return Axios.request(options);
}
