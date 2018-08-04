import { SET_USER, UNSET_AUTHED_USER } from '../actions/authedUser';

/* Reducer for user authentication */
export default function authedUser (state = null, action) {
    switch(action.type) {
        case SET_USER :
            return action.userId;
        case UNSET_AUTHED_USER :
            return null;
        default :
            return state;
    }
}
