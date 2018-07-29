import { combineReducers } from 'redux';
import users from './users';
import authedUser from './authedUser';
import questions from './questions';
import nav from './nav';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    users,
    questions,
    activeTab: nav,
    loadingBar: loadingBarReducer
})
