import * as types from './allTracks.types'

export const addAllTracks = (tracksArray) => {
    return {

        type: types.ADD_ALL_TRACKS,
        payload: {
            tracksArray,
        }
    };
};

export const addTrack = ({ trackId, userId, title, uploadedBy, songSrc, imageSrc, date }) => {
    return {

        type: types.ADD_TRACK,
        payload: {
            track: {
                trackId,
                userId,
                title,
                uploadedBy,
                audio: songSrc,
                img: imageSrc,
                date,
                likes: 0,
            }
        }
    };
};