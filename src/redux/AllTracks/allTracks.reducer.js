import * as types from './allTracks.types'

const INITIAL_STATE = [];

const allTracksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case types.ADD_ALL_TRACKS:

            return [
                ...action.payload.tracksArray
            ]

        case types.ADD_TRACK:

            return [
                ...state,
                action.payload.track
            ]


        default: return state;

    }

};

export default allTracksReducer;