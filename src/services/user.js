import API from "../axios";
import {GET_USER, MOST_ANSWERS} from "../utils/constants/user";

const user = {
    async getMostAnswers() {
        return await API.get(MOST_ANSWERS)
    },
    async getUser() {
        return await API.get(GET_USER)
    }
}

export default user;