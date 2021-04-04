import { compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage'
import rootReducer from './rootReducer'

const enhancer = compose(
    persistState(),
    composeWithDevTools(),
)

const store = createStore(
    rootReducer,
    enhancer
);

export default store;