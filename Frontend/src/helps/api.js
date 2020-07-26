import axios from 'axios'

const api = axios.create({
    timeout: 5000,
    baseURL:  'https://api.github.com',
})

export default api;