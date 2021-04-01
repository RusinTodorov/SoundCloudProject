import * as types from './track.types'

export const addSrc = (src) => {

    return {

        type: types.ADD_SRC,
        payload: {
            src,
        }
    };

};

export const playTrack = () => {

    return {

        type: types.PLAY,

    };

};

export const pauseTrack = () => {

    return {

        type: types.PAUSE,

    };

};

export const setCurrTime = (secs) => {

    return {

        type: types.CURR_TIME,
        payload: {
            currTime: secs,
            strTime: calculateTime(secs)
        }

    };

};

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}


