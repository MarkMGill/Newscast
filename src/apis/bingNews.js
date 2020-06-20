import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.cognitive.microsoft.com/',
    responseType: 'json',
    headers: {
        'Ocp-Apim-Subscription-Key': '608116b425944751b285e9d73c041425'
    }
});