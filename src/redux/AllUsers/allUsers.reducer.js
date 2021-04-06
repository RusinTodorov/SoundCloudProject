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

        case types.UPDATE_USER_LIKES:
            let currId = action.payload.id;
            let currLikesArr = action.payload.likesArr;

            let currUser = state.find(user => user.id === currId)
            let newState = state.filter(user => user.id !== currId)

            return [
                ...newState,
                {
                    ...currUser,
                    likes: currLikesArr
                }
            ]


        default: return state;

    }

};

export default allUsersReducer;