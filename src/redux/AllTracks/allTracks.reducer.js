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

        case types.UPDATE_TRACK_LIKES:
            let id = action.payload.trackId;
            let count = action.payload.countOfLikes;

            if (count < 0) {
                count = 0;
            }

            let track = state.find(track => track.trackId === id);
            let newState = state.filter(track => track.trackId !== id);

            return [
                ...newState,
                {
                    ...track,
                    likes: count,
                }
            ]


        default: return state;

    }

};

export default allTracksReducer;