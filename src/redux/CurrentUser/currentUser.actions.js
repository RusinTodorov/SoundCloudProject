import * as types from './currentUser.types'

export const loginUser = (id) => {

    return {

        type: types.LOGIN_USER,
        payload: {
            id,
        }
    };

};

export const logoutUser = (src) => {

    return {

        type: types.LOGOUT_USER,
        payload: {
            src,
        }
    };

};
