// let obj = {
//     src: '',
//     isPlaying: '',
// }

import * as types from './track.types'

const INITIAL_STATE = {
    href: '',
    src: '',
    image: '',
    isPlaying: false,
    seekTime: 0,
    currTime: 0,
    strTime: '0:00',
    duration: '0:00',
    content: {
        title: '',
        author: '',
        description: '',
        date: '',
    }
};

const trackReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case types.ADD_SRC:

            return {

                ...state, src: action.payload.src,

            };

        case types.PLAY:

            return {
                ...state, isPlaying: true,

            };

        case types.PAUSE:

            return {
                ...state, isPlaying: false,

            };

        case types.DURATION:

            return {
                ...state, duration: action.payload.duration,

            };

        case types.CURR_TIME:

            return {
                ...state, strTime: action.payload.strTime, currTime: action.payload.currTime,

            };

        case types.SEEK_TIME:

            return {
                ...state, seekTime: action.payload.seekTime,
            };

        case types.ADD_CONTENT:

            return {
                ...state,
                content: {
                    title: action.payload.title,
                    author: action.payload.author,
                    date: action.payload.date,
                    description: action.payload.description,
                },
            };

        case types.ADD_IMG:

            return {
                ...state,
                image: action.payload.image,
            };

        default: return state;

    }

};

export default trackReducer;