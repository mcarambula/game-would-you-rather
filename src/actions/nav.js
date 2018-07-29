export const CHANGE_TAB = 'CHANGE_TAB';
export const RESET_TAB = 'RESET_TAB';

export const changeTab = (activeTab) => (
    {
        type: CHANGE_TAB,
        activeTab
    }
)

export const resetTab = () => (
    {
        type: RESET_TAB
    }
)
