export const GET_USERS = 'GET_USERS';
export const ERROR_USERS = 'ERROR_USERS';
export const SET_USER = 'SET_USER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';
export const CREATE_USER = 'CREATE_USER';

/* Action creator to get the list of users */
export const getUsers = (users) => (
    {
        type: GET_USERS,
        users
    }
);
/* Action creator to add a new question on the user state */
export const addUserQuestion = (userId, questionId) => (
    {
        type: ADD_USER_QUESTION,
        userId,
        questionId
    }
);
/* Action creator to add the answer selected on the user state */
export const addUserAnswer = (userId, questionId, optionId) => (
    {
        type: ADD_USER_ANSWER,
        userId,
        questionId,
        optionId
    }
);
/* Action creator to create a new user */
export const createUser = (user) => (
    {
        type: CREATE_USER,
        user
    }
);
