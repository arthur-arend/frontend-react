import axios from 'axios';

const api = axios.create({
    baseURL: `https://gorest.co.in/public-api/posts?_format=json&access-token=${process.env.REACT_APP_TOKEN}`
});

export default api;