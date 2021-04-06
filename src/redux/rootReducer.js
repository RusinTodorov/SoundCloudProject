
import { combineReducers } from 'redux';

import allUsersReducer from './AllUsers/allUsers.reducer'
import currentUserReducer from './CurrentUser/currentUser.reducer'
import allTracksReducer from './AllTracks/allTracks.reducer'
import trackReducer from './Track/track.reducer';


const rootReducer = combineReducers({
    allUsers: allUsersReducer,
    allTracks: allTracksReducer,
    track: trackReducer,
    currentUser: currentUserReducer,
});

export default rootReducer;