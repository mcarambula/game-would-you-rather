import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
    _createUser
  } from './_DATA.js'

  export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
  }

  export function saveQuestion(question) {
      return _saveQuestion(question);
  }

  export function saveQuestionAnswer({ authedUser, questionId, optionId }) {
      return _saveQuestionAnswer({ authedUser, qid: questionId, answer: optionId });
  }

  export function createUser({ firstname, lastname }) {
      return _createUser({ firstname, lastname });
  }
