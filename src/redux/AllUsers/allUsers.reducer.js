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
                action.payload.user
            ]

        case types.UPDATE_USER:
            let actionLikes = action.payload.user.likes;
            console.log('vvv');
            console.log(actionLikes);
            let currUser = state.find(user => user.id === action.payload.user.id)
            let newState = state.filter(user => user.id !== action.payload.user.id);
            let newLikes = currUser.likes.filter(like => actionLikes.include(like))

            return [
                ...newState,
                {
                    ...currUser,
                    likes: [...newLikes]
                }
            ]


        default: return state;

    }

};

export default allUsersReducer;