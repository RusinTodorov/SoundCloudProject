// let obj = {
//     src: '',
//     isPlaying: '',
// }

import * as types from './track.types'

const INITIAL_STATE = {
    src: '',
    isPlaying: false,
    currTime: 0,
    strTime: '0:00'
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

        case types.CURR_TIME:

            return {
                ...state, strTime: action.payload.strTime, currTime: action.payload.currTime,

            };

        default: return state;

    }

};

export default trackReducer;