import { GET_USERS, SET_USER } from '../actions/users';

export default function users (state = null, action) {
    switch(action.type) {
        case GET_USERS :
            return {
                ...state,
                ...action.users
            };
        case SET_USER : 
            return {
                ...state,
                userId: action.userId
            }
        default :
            return state;
    }
}
