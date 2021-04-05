
import { combineReducers } from 'redux';

import allUsersReducer from './AllUsers/allUsers.reducer'
import allTracksReducer from './AllTracks/allTracks.reducer'
import trackReducer from './Track/track.reducer';
import currentPathReducer from './CurrentPath/currentPath.reducer'


const rootReducer = combineReducers({
    allUsers: allUsersReducer,
    allTracks: allTracksReducer,
    track: trackReducer,
    path: currentPathReducer,
});

export default rootReducer;