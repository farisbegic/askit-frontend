import API from "../axios";
import {REGISTER} from "../utils/constants/authentication";

const authentication = {
    async register(payload) {
        return await API.post(REGISTER, payload)
    }
}

export default authentication