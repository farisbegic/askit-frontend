import API from "../axios";
import {DELETE_ANSWER_RATING, EDIT_ANSWER_RATING, SAVE_ANSWER_RATING} from "../utils/constants/answerRating";

const answerRating = {
    async saveRating(payload) {
        return await API.post(SAVE_ANSWER_RATING, payload)
    },
    async editRating(payload) {
        return await API.put(EDIT_ANSWER_RATING, payload)
    },
    async deleteRating(payload) {
        return await API.delete(`${DELETE_ANSWER_RATING}${payload}`)
    }
}

export default answerRating