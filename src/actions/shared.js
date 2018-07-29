import * as API from '../api/api';
import * as QUESTION_ACTIONS from '../actions/questions';
import * as USER_ACTIONS from '../actions/users';
import { showLoading, hideLoading } from 'react-redux-loading';

/* Thunk to retrieve the initial data of the application */
export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());
    return API.getInitialData()
            .then(({ users, questions }) => {
                dispatch(USER_ACTIONS.getAllUsers(users));
                dispatch(QUESTION_ACTIONS.getAllQuestions(questions));
                dispatch(hideLoading());
            })
}

/* Thunk that will be triggered when the user adds a new question */
export const handleAddQuestion = (optionOneText, optionTwoText) => ( dispatch, getState ) => {
    dispatch(showLoading());
    const { authedUser } = getState();
    const question = {
        optionOneText,
        optionTwoText,
        author: authedUser
    };
    return API.saveQuestion(question)
            .then((formatedQuestion) => {
                dispatch(QUESTION_ACTIONS.addQuestion(formatedQuestion))
                dispatch(USER_ACTIONS.addUserQuestion(authedUser, formatedQuestion.id))
            })
            .then(() => dispatch(hideLoading()));
}

/* Thunk that will be triggered when the user selects an answer */
export const handleSaveAnswer = ( optionId, questionId ) => ( dispatch, getState ) => {
    dispatch(showLoading());
    const { authedUser } = getState();
    return  API.saveQuestionAnswer ({ authedUser, questionId, optionId })
            .then(() => {
                dispatch(USER_ACTIONS.addUserAnswer(authedUser, questionId, optionId));
                dispatch(QUESTION_ACTIONS.saveAnswer(authedUser, questionId, optionId));
            })
            .then(() => dispatch(hideLoading()))
            .catch(() => dispatch(hideLoading()))
}
