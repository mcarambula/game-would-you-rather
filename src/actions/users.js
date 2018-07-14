import { showLoading, hideLoading } from 'react-redux-loading';
import { _getUsers } from '../api/_DATA.js';

export const GET_USERS = 'GET_USERS';
export const ERROR_USERS = 'ERROR_USERS';
export const SET_USER = 'SET_USER';

/* Action creator */
export const getUsers = (users) => (
    {
        type: GET_USERS,
        users
    }
);

export const setUser = (userId) => (
    {
        type: SET_USER,
        userId
    }
);

export const errorUsers = (error) => (
    {
        type: ERROR_USERS,
        error
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
