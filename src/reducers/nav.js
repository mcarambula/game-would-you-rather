import { CHANGE_TAB, RESET_TAB } from '../actions/nav';

export default function nav (state = 0, action) {
    switch(action.type) {
        case CHANGE_TAB :
            return action.activeTab;
        case RESET_TAB :
            return 0;
        default :
            return state;
    }
}
