
import { combineReducers } from 'redux';

import allTracksReducer from './AllTracks/allTracks.reducer'
import trackReducer from './Track/track.reducer';
import currentPathReducer from './Current Path/currentPath.reducer'


const rootReducer = combineReducers({
    allTracks: allTracksReducer,
    track: trackReducer,
    path: currentPathReducer,
});

export default rootReducer;