import axios from 'axios';
const API_KEY = '5f7d207fbc54b4d6c8cca640742dfdd0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log("action axios -->>", request);
    
    return {
        type : FETCH_WEATHER,
        payload : request
    }
    
}