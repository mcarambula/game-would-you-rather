import * as API from '../api/api';
import { getQuestions, getAllQuestions, addQuestion, saveAnswer } from '../actions/questions';
import { getUsers, getAllUsers, addUserQuestion, addUserAnswer } from '../actions/users';
import { showLoading, hideLoading } from 'react-redux-loading'

export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());
    return API.getInitialData()
            .then(({ users, questions }) => {
                dispatch(getAllUsers(users));
                dispatch(getAllQuestions(questions));
                dispatch(hideLoading());
            })
}

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
                dispatch(addQuestion(formatedQuestion))
                dispatch(addUserQuestion(authedUser, formatedQuestion.id))
            })
            .then(() => dispatch(hideLoading()));
}

export const handleSaveAnswer = ( optionId, questionId ) => ( dispatch, getState ) => {
    dispatch(showLoading());
    const { authedUser } = getState();
    return  API.saveQuestionAnswer ({ authedUser, questionId, optionId })
            .then(() => {
                dispatch(addUserAnswer(authedUser, questionId, optionId));
                dispatch(saveAnswer(authedUser, questionId, optionId));
                dispatch(hideLoading());
            })
}
