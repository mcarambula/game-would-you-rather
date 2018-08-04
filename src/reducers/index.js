import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import users from './users';
import authedUser from './authedUser';
import questions from './questions';
import nav from './nav';

export default combineReducers({
    authedUser,
    users,
    questions,
    activeTab: nav,
    loadingBar: loadingBarReducer
})
