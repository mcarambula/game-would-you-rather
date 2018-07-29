export const SET_USER = 'SET_USER';
export const UNSET_AUTHED_USER = 'UNSET_AUTHED_USER';

export const setUser = (userId) => (
    {
        type: SET_USER,
        userId
    }
);

export const unsetAuthedUser = () => (
    {
        type: UNSET_AUTHED_USER
    }
)
