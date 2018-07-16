import { getInitialData } from '../api/api';
import { getQuestions, getAllQuestions } from '../actions/questions';
import { getUsers, getAllUsers } from '../actions/users';
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getAllUsers(users));
        dispatch(getAllQuestions(questions));
        dispatch(hideLoading());
      })
  }
}
