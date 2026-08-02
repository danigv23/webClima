import { fetchWeatherApi } from "openmeteo";

const location = {
    latitude: 40.417964,
    longitude: -3.713234
};

const url = "https://api.open-meteo.com/v1/forecast";
const response = await fetchWeatherApi(url, location)

console.log(response);