import API from "../axios";
import {ACCESS_TOKEN, LOGIN, REGISTER} from "../utils/constants/authentication";

const authentication = {
    async register(payload) {
        return await API.post(REGISTER, payload)
    },
    async login(payload) {
        return await API.post(LOGIN, payload)
    },
    async getAccessToken() {
        return await API.get(ACCESS_TOKEN);
    }
}

export default authentication