import * as actionTypes from './actionTypes';

export function receiveUsers(data) {
    return { type: actionTypes.RECEIVE_USER, users: data };
}

export function fetchUsers() {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => 
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                
            });
    };
}