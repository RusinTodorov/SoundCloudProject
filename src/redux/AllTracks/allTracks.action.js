import * as types from './allTracks.types'

export const addAllTracks = (tracksArray) => {
    return {

        type: types.ADD_ALL_TRACKS,
        payload: {
            tracksArray,
        }
    };

};