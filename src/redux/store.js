import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'
import { loadState, saveState } from './localStorage'

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(),
);

store.subscribe(() => {
    saveState({
        allTracks: store.getState().allTracks,
        allUsers: store.getState().allUsers,
        currentUser: store.getState().currentUser,
    });
});

export default store;