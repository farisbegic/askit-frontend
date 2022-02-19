import API from "../axios";
import {GET_HOT_QUESTIONS, GET_QUESTIONS} from "../utils/constants/question";

const question = {
    async getLatestQuestions(payload) {
        return await API.get(`${GET_QUESTIONS}${payload}`)
    },
    async getHotQuestions() {
        return await API.get(GET_HOT_QUESTIONS);
    }
}

export default question