
import { combineReducers } from 'redux';

import allTracksReducer from './AllTracks/allTracks.reducer'
import trackReducer from './Track/track.reducer';


const rootReducer = combineReducers({
    allTracks: allTracksReducer,
    track: trackReducer,
});

export default rootReducer;