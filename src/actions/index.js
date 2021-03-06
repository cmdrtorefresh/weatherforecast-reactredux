import axios from 'axios';

const API_KEY = "1d8f194f5411c9bbaca4f7c8d1b76702";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url); // Returns Promise (Request is a promise)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
