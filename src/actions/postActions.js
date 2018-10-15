import axios from 'axios';

export function fetchPosts() {
    return {
        type: 'FETCH_POSTS',
        payload: axios('https://jsonplaceholder.typicode.com/posts')
    }
}