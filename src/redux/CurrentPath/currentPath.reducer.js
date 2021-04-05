export const ADD_PATH = 'ADD_PATH';

export const addPath = (path) => {

    return {

        type: ADD_PATH,
        payload: {
            path,
        }
    };

};

const INITIAL_STATE = '';
const currentPathReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADD_PATH:

            return action.payload.path;

        default: return state;

    }

};

export default currentPathReducer;