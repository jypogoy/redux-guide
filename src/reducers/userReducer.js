import initialState from './initialState';
import { FETCH_USERS, RECEIVE_USERS, FETCH_USERS_ERROR } from '../actions/actionTypes';

export default function userReducer(state = initialState.users, action) {
    let newState;
    switch (action.type) {
        case FETCH_USERS:
            console.log('FETCH_USERS Action');
            return action;

        case FETCH_USERS_ERROR:
            console.log('FETCH_USERS_ERROR');
            return action;    

        case RECEIVE_USERS:
            newState = action.users;
            console.log('RECEIVE_USERS Action');
            return newState;

        default:
            return state;
    }
}