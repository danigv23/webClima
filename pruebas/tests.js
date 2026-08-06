import { fetchWeatherApi } from "../openmeteo";

const params = {
    latitude: 90,
    longitude: -8,
    hourly: "temperature_2m",
    forecast_days: 1,

};

const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params)
const response = responses[0];

console.log(response);
console.log("---------------------------------------------------------------------------------------------------")

const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const utcOffsetSeconds = response.utcOffsetSeconds();
const hourly = response.hourly();


console.log(
    `\nCoordinates: ${latitude}°N ${longitude}°E`,
    `\nElevation: ${elevation}m asl`,
    `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

console.log("---------------------------------------------------------------------------------------------------")

const weatherData = {
    hourly: {
        time: Array.from(
            { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() },
            (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
        ),
        temperature_2m: hourly.variables(0).valuesArray(),
    },
};

console.log(weatherData)

// let a = 2000;

// let b = (a * 4.70) / 100;
// let c = (a * 1.60) / 100;
// let d = (a * 0.10) / 100;
// let e = (a * 0.15) / 100;
// let f = (a * 2) / 100;

// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// console.log(a - b - c - d - e - f)