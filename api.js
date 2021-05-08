import axios from 'axios'

const SERVER_URL = "http://192.168.1.211:4941/api/v1";

const instance = axios.create({
    baseURL: SERVER_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default {
    getAll: () => instance.get('/'),

    clear: () => instance.delete('/'),
    
    add: (item) => instance.post('/', {"value": item})
}