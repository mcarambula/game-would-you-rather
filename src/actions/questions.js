export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ERROR_QUESTIONS = 'ERROR_QUESTIONS';
export const SAVE_ANSWER = 'SAVE_ANSWER';

/* Action creator to get the list of the questions */
export const getQuestions = (questions) => (
    {
        type: GET_QUESTIONS,
        questions
    }
);

/* Action creator to add a new question */
export const addQuestion = (question) => (
    {
        type: ADD_QUESTION,
        question,
    }
);

/* Action creator to save the answer selected by a user on a question */
export const saveAnswer = (authedUser, questionId, optionId) => (
    {
        type: SAVE_ANSWER,
        authedUser,
        questionId,
        optionId
    }
);
