import axios from 'axios';


const token = 'uliZcJk7OLoizDU-8Cps62Z9mGdqSUkXRMSb';

const api = axios.create({
    baseURL: `https://gorest.co.in/public-api/posts?_format=json&access-token=${token}`
});

export default api;