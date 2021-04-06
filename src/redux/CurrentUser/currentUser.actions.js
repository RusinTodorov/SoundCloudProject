import * as types from './currentUser.types'

import store from '../store'

export const loginUser = (userObj) => {

    return {

        type: types.LOGIN_USER,
        payload: {
            user: userObj,
        }
    };

};

export const logoutUser = () => {

    return {

        type: types.LOGOUT_USER,
        payload: {

        }
    };

};

export const addIdToUserUploads = (trackId) => {

    return {

        type: types.ADD_TRACK_ID_TO_UPLOADS,
        payload: { trackId }
    };

};

export const addFavTrack = (trackId) => {

    return {

        type: types.ADD_FAV_TRACK,
        payload: { trackId }
    };

};

export const removeFavTrack = (trackId) => {

    return {

        type: types.REMOVE_FAV_TRACK,
        payload: { trackId }
    };

};
