import API from "../axios";
import {
    ADD_QUESTION, DELETE_QUESTION, EDIT_QUESTION,
    GET_HOT_QUESTIONS,
    GET_MY_QUESTIONS,
    GET_QUESTION,
    GET_QUESTIONS, SEARCH_QUESTION
} from "../utils/constants/question";

const question = {
    async getLatestQuestions(payload) {
        return await API.get(`${GET_QUESTIONS}${payload}`)
    },
    async getHotQuestions() {
        return await API.get(GET_HOT_QUESTIONS);
    },
    async getMyQuestions(payload) {
        return await API.get(`${GET_MY_QUESTIONS}${payload}`)
    },
    async getQuestion(payload) {
        return await API.get(`${GET_QUESTION}${payload}`)
    },
    async addQuestion(payload) {
        return await API.post(ADD_QUESTION, payload)
    },
    async deleteQuestion(payload) {
        return await API.delete(`${DELETE_QUESTION}${payload}`)
    },
    async editQuestion(payload) {
        return await API.put(EDIT_QUESTION, payload)
    },
    async searchQuestion(payload) {
        return await API.get(`${SEARCH_QUESTION}${payload}`);
    }
}

export default question