import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
// import persistState from 'redux-localstorage'
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


// const store = createStore(
//     rootReducer,
//     enhancer
// );

// const enhancer = compose(
//     persistedState,
//     composeWithDevTools(),
// )

export default store;