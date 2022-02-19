import API from "../axios";
import {GET_QUESTIONS} from "../utils/constants/question";

const question = {
    getLatestQuestions(payload) {
        return API.get(`${GET_QUESTIONS}${payload}`)
    }
}

export default question