import Config from "backend/config.json";
import Axios from "axios";


export async function login(loginRequest) {
    const payLoad = {
        email: loginRequest.email,
        password: loginRequest.password
    };

    const options = {
        method: "POST", // Method type
        baseURL: Config.baseUrl, // Base URL
        url: Config.idm.login, // Path of URL
        data: payLoad // Data to send in Body
    }

    return Axios.request(options);
}
