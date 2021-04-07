import * as types from './allUsers.types'

export const addAllUsers = (usersArray) => {
    return {

        type: types.ADD_ALL_USERS,
        payload: {
            usersArray,
        }
    };
};

export const addUser = ({ id, name, profileImg = '', backgroundImg = '' }) => {
    return {

        type: types.ADD_USER,
        payload: {
            user: {
                id,
                name,
                profileImg,
                backgroundImg,
                uploads: [],
                likes: [],
            }
        }
    };
};

export const updateUserUploads = (id, trackId) => {
    return {

        type: types.UPDATE_USER_UPLOADS,
        payload: {
            id,
            trackId,
        }
    };
};

export const updateUserLikes = ({ id, likes }) => {

    return {

        type: types.UPDATE_USER_LIKES,
        payload: {
            id,
            likesArr: likes,
        }
    };
};