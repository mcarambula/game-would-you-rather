export const CHANGE_TAB = 'CHANGE_TAB';


export function changeTab(activeTab) {
    return {
        type: CHANGE_TAB,
        activeTab
    }
}
