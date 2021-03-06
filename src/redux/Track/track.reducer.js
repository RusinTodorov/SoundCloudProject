import * as types from './track.types'

const INITIAL_STATE = {
    userId: '',
    id: '',
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
    },
    prevId: -1,
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


        case types.SET_TRACK_ID:

            return {

                ...state, id: action.payload.id,

            };


        case types.SET_USER_ID:

            return {

                ...state, userId: action.payload.userId,

            };


        case types.SET_PREV_TRACK_ID:

            return {

                ...state, prevId: action.payload.id,

            };

        default: return state;

    }

};

export default trackReducer;