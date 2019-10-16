import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com/',
    headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '6a4556e0famsh279d7cdf3c34fa9p1927ecjsne3cba55359dd',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
});

export default instance;
