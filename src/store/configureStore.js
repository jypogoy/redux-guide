import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/allReducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleWare = applyMiddleware(thunk, logger);

export default function configureStore() {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        middleWare
    );
}