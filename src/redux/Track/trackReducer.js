function trackReducer(state = {}, action) {

    if (action.type === 'add_src') {
        return { ...state, src: action.payload.src }
    } else if (action.type === 'play') {
        return { ...state, isPlaying: true }
    } else if (action.type === 'pause') {
        return { ...state, isPlaying: false }
    } else {
        return state
    }
}

export default trackReducer;