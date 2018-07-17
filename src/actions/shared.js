import { getInitialData, saveQuestion } from '../api/api';
import { getQuestions, getAllQuestions, addQuestion } from '../actions/questions';
import { getUsers, getAllUsers, addUserQuestion } from '../actions/users';
import { showLoading, hideLoading } from 'react-redux-loading'

export const handleInitialData = () => (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
            .then(({ users, questions }) => {
                dispatch(getAllUsers(users));
                dispatch(getAllQuestions(questions));
                dispatch(hideLoading());
            })
}

export const handleAddQuestion = (optionOne, optionTwo) => (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    const question = {
        optionOne,
        optionTwo,
        author: authedUser
    };
    return saveQuestion(question)
            .then((formatedQuestion) => {
                dispatch(addQuestion(formatedQuestion))
                dispatch(addUserQuestion(authedUser, formatedQuestion.id))
            })
            .then(() => dispatch(hideLoading()));
}
