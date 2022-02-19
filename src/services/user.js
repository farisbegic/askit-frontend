import API from "../axios";
import {EDIT_INFORMATION, EDIT_PASSWORD, GET_USER, MOST_ANSWERS} from "../utils/constants/user";

const user = {
    async getMostAnswers() {
        return await API.get(MOST_ANSWERS)
    },
    async getUser() {
        return await API.get(GET_USER)
    },
    async editProfile(payload) {
        return await API.put(EDIT_INFORMATION, payload)
    },
    async editPassword(payload) {
        return await API.post(EDIT_PASSWORD, payload)
    }
}

export default user;