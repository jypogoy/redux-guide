export default function reducer(state = {
        users: {
            id: null,
            name: null,
            ade: null
        },
        fetching: false,
        fetched: false,
        error: null
    }, action) {

    switch (action.type) {
        case 'FETCH_USERS':
            return {...state, fetching: true};
     
        case 'FETCH_USERS_REJECTED':
            return {...state, fetching: false, error: action.payload};                 

        case 'FETCH_USERS_FULFILLED':
            return {
                ...state, 
                fetching: false,
                fetched: true,
                users: action.payload
            };        
     
        case 'SET_USER_NAME':
            return {
                ...state,
                user: [...state.user, action.payload]
            }    

        case 'SET_USER_AGE':
            const {id, text} = action.payload;
            const newUsers = [...state.users];
            const userToUpdate = newUsers.findIndex(user => user.id === id);
            newUsers[userToUpdate] = action.payload;    

            return {
                ...state,
                users: newUsers
            }

        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }    

        default:
            return state;
    }
}