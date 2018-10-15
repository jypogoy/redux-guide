import { combineReducers } from 'redux';

import user from './userReducer';
import posts from './postReducer';

export default combineReducers({
    user,
    posts
});