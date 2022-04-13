import Config from "backend/config.json";
import Axios from "axios";


/**
 * We use axios to create REST calls to our backend
 *
 * We have provided the login rest call for your
 * reference to build other rest calls with.
 *
 */
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
