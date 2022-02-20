import API from "../axios";
import {DELETE_ANSWER, EDIT_ANSWER, SAVE_ANSWER} from "../utils/constants/answer";

const answer = {
    async editAnswer(payload) {
        return await API.put(EDIT_ANSWER, payload)
    },
    async deleteAnswer(payload) {
        return await API.delete(`${DELETE_ANSWER}${payload}`)
    },
    async saveAnswer(payload) {
        return await API.post(SAVE_ANSWER, payload);
    }
}

export default answer