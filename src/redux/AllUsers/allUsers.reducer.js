import * as types from './allUsers.types'

const INITIAL_STATE = [];

const allUsersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case types.ADD_ALL_USERS:

            return [
                ...action.payload.usersArray
            ]

        case types.ADD_USER:
            return [
                ...state,
                { ...action.payload.user }
            ]

        case types.UPDATE_USER_LIKES: {

            let currId = action.payload.id;
            let currLikesArr = action.payload.likesArr;

            let index = state.findIndex(user => user.id === currId);
            let user = state[index];
            let newState = [...state];
            newState.splice(index, 1, { ...user, likes: currLikesArr })

            return [...newState]
        }

        case types.UPDATE_USER_UPLOADS: {

            let currId = action.payload.id;
            let trackId = action.payload.trackId;

            let index = state.findIndex(user => user.id === currId);

            let user = state[index];
            user.uploads.push(trackId)

            let newState = [...state];
            newState.splice(index, 1, { ...user })

            return [...newState]
        }

        default: return state;

    }

};

export default allUsersReducer;