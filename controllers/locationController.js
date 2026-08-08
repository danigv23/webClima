const URL = "https://geocoding-api.open-meteo.com/v1/";

let countryCode = "ES";
let city = "Barcelona";
let numResults = "10"

const editedURL = URL + "search?name=" + city + "&count=" + numResults + "&language=es&format=json&countryCode=" + countryCode;

console.log(editedURL);

fetch(editedURL).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data)
});
