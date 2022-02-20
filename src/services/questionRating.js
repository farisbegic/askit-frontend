import API from "../axios";
import {DELETE_QUESTION_RATING, EDIT_QUESTION_RATING, SAVE_QUESTION_RATING} from "../utils/constants/questionRating";

const questionRating = {
    async saveRating(payload) {
        return await API.post(SAVE_QUESTION_RATING, payload)
    },
    async editRating(payload) {
        return await API.put(EDIT_QUESTION_RATING, payload)
    },
    async deleteRating(payload) {
        return await API.delete(`${DELETE_QUESTION_RATING}${payload}`)
    }
}

export default questionRating