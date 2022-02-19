import API from "../axios";
import {MOST_ANSWERS} from "../utils/constants/user";

const user = {
    async getMostAnswers() {
        return await API.get(MOST_ANSWERS)
    }
}

export default user;