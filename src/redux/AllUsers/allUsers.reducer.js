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


        default: return state;

    }

};

export default allUsersReducer;