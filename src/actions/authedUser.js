export const SET_USER = 'SET_USER';
export const UNSET_AUTHED_USER = 'UNSET_AUTHED_USER';

/* Action creator to set a user when the log in occurs */
export const setUser = (userId) => (
    {
        type: SET_USER,
        userId
    }
);
/* Action creator to unset then when a logout occurs */
export const unsetAuthedUser = () => (
    {
        type: UNSET_AUTHED_USER
    }
);
