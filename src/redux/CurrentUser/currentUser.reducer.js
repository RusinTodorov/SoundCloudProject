import * as types from './currentUser.types'

const INITIAL_STATE = {
    isLoggedIn: false,

};

const currentUserReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case types.LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                ...action.payload.user
            };

        case types.LOGOUT_USER:

            return {
                isLoggedIn: false,
            };

        case types.ADD_TRACK_ID_TO_UPLOADS:

            return {
                ...state,
                uploads: [...state.uploads, action.payload.trackId]
            };

        case types.ADD_FAV_TRACK:

            return {
                ...state,
                likes: [...state.likes, action.payload.trackId]
            };

        case types.REMOVE_FAV_TRACK:
            let newArr = state.likes.filter(id => id !== action.payload.trackId);
            return {
                ...state,
                likes: [...newArr]
            };



        default: return state;

    }

};

export default currentUserReducer;