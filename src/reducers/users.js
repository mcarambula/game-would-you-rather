import { GET_USERS, ADD_USER_QUESTION, ADD_USER_ANSWER } from '../actions/users';

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
        case ADD_USER_ANSWER:
            return {
                ...state,
                [action.userId] : {
                    ...state[action.userId],
                    answers: {
                        ...state[action.userId].answers,
                        [action.questionId]: action.optionId
                    }
                }
            }
        default :
            return state;
    }
}
