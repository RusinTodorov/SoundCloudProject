import * as types from './allTracks.types'
import DATA from '../../data/Tracks/data'

const INITIAL_STATE = [...DATA];

const allTracksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case types.ADD_ALL_TRACKS:

            return [
                ...action.payload.tracksArray
            ]


        default: return state;

    }

};

export default allTracksReducer;