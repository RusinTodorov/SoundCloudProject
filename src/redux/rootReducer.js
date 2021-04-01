
import { combineReducers } from 'redux';


import trackReducer from './Track/track.reducer';


const rootReducer = combineReducers({

    track: trackReducer,

});

export default rootReducer;