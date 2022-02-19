import API from "../axios";
import {ACCESS_TOKEN, REGISTER} from "../utils/constants/authentication";

const authentication = {
    async register(payload) {
        return await API.post(REGISTER, payload)
    },
    async getAccessToken() {
        return await API.get(ACCESS_TOKEN);
    }
}

export default authentication