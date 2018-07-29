import { CHANGE_TAB } from '../actions/nav';

export default function users (state = 0, action) {
    switch(action.type) {
        case CHANGE_TAB :
            return action.activeTab
        default :
            return state;
    }
}
