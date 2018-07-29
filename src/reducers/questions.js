import { GET_QUESTIONS, ADD_QUESTION, SAVE_ANSWER } from '../actions/questions';

export default function users (state = {}, action) {
    switch(action.type) {
        case GET_QUESTIONS :
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id] : {
                    ...action.question
                }
            }
        case SAVE_ANSWER :
            const { questionId, optionId, authedUser } = action;
            return {
                ...state,
                [questionId] : {
                    ...state[questionId],
                    [ optionId ] : {
                        ...state[questionId][optionId],
                        votes: state[questionId][optionId].votes.concat([authedUser])
                    }
                }
            }
        default :
            return state;
    }
}
