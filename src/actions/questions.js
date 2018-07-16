import { showLoading, hideLoading } from 'react-redux-loading';
import { _getQuestions } from '../api/_DATA.js';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ERROR_QUESTIONS = 'ERROR_QUESTIONS';

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
