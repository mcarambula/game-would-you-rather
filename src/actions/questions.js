import { showLoading, hideLoading } from 'react-redux-loading';
import { _getQuestions } from '../api/_DATA.js';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ERROR_QUESTIONS = 'ERROR_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';

/* Action creator */
export const getQuestions = (questions) => (
    {
        type: GET_QUESTIONS,
        questions
    }
);

export const errorQuestions = (error) => (
    {
        type: ERROR_QUESTIONS,
        error
    }
);

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function saveAnswer(authedUser, questionId, optionId) {
    return {
        type: SAVE_ANSWER,
        authedUser,
        questionId,
        optionId
    }
}

/* Async action creator */
export const getAllQuestions = () => (dispatch) => {
    dispatch(showLoading());
    return _getQuestions()
        .then((questions) => {
            dispatch(getQuestions(questions));
        })
        .then(() => {
            dispatch(hideLoading());
        })
        .catch((error) => {
            dispatch(errorQuestions(error))
        })
}
