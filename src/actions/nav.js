export const CHANGE_TAB = 'CHANGE_TAB';
export const RESET_TAB = 'RESET_TAB';

/*
    Action creator to change the tab of the answered / unaswered questions
    This is managed on the store instead of the component state itself
    because I want to keep track of the last tab selected and be able
    to see the detail of a question and go back to the list I was checking.
*/
export const changeTab = (activeTab) => (
    {
        type: CHANGE_TAB,
        activeTab
    }
);
/* Action creator that allows to set the initial tab after a user logout */
export const resetTab = () => (
    {
        type: RESET_TAB
    }
);
