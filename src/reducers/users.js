import { GET_USERS, SET_USER, ADD_USER_QUESTION } from '../actions/users';

export default function users (state = null, action) {
    switch(action.type) {
        case GET_USERS :
            return {
                ...state,
                ...action.users
            };
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.userId] : {
                    ...state[action.userId],
                    questions: state[action.userId].questions.concat([action.questionId])
                }
            }
        default :
            return state;
    }
}
