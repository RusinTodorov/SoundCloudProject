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

export const setDuration = (secs) => {

    return {

        type: types.DURATION,
        payload: {
            duration: calculateTime(secs),
        }

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

export const onSeek = (secs) => {

    return {

        type: types.SEEK_TIME,
        payload: {
            seekTime: secs,
        }

    };
};


export const addContent = ({ title, author, date, description }) => {

    return {

        type: types.ADD_CONTENT,
        payload: {
            title,
            author,
            date,
            description,
        }
    };
};

export const addImage = (img) => {

    return {

        type: types.ADD_IMG,
        payload: {
            image: img,
        }
    };
};

export const setId = (id) => {

    return {

        type: types.SET_ID,
        payload: {
            id: id,
        }
    };
};

const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}


