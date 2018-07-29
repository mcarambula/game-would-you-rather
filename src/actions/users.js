import { showLoading, hideLoading } from 'react-redux-loading';
import { _getUsers } from '../api/_DATA.js';

export const GET_USERS = 'GET_USERS';
export const ERROR_USERS = 'ERROR_USERS';
export const SET_USER = 'SET_USER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';

/* Action creator */
export const getUsers = (users) => (
    {
        type: GET_USERS,
        users
    }
);

export const errorUsers = (error) => (
    {
        type: ERROR_USERS,
        error
    }
);

export const addUserQuestion = (userId, questionId) => (
    {
        type: ADD_USER_QUESTION,
        userId,
        questionId
    }
);

export const addUserAnswer = (userId, questionId, optionId) => (
    {
        type: ADD_USER_ANSWER,
        userId,
        questionId,
        optionId
    }
);

/* Async action creator */
export const getAllUsers = () => (dispatch) => {
    dispatch(showLoading());
    return _getUsers()
        .then((users) => {
            dispatch(getUsers(users));
        })
        .then(() => {
            dispatch(hideLoading());
        })
        .catch((error) => {
            dispatch(errorUsers(error))
        })
}
