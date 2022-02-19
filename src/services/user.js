import API from "../axios";
import {EDIT_INFORMATION, GET_USER, MOST_ANSWERS} from "../utils/constants/user";

const user = {
    async getMostAnswers() {
        return await API.get(MOST_ANSWERS)
    },
    async getUser() {
        return await API.get(GET_USER)
    },
    async editProfile(payload) {
        return await API.put(EDIT_INFORMATION, payload)
    }
}

export default user;