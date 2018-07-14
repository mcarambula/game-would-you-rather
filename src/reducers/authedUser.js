import { SET_USER } from '../actions/authedUser';

export default function users (state = null, action) {
    switch(action.type) {
        case SET_USER : 
            return action.userId
        default :
            return state;
    }
}
