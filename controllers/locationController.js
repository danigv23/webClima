let showWheatherData = (req, res) => {
    formattedUserData(req.reqBody);

};

function formattedUserData(reqBody) {
    const userCountry = reqBody.pais;
    const userCity = reqBody.ciudad;
};

async function wheatherData(city, countryCode) {
    const URL = "https://geocoding-api.open-meteo.com/v1/";

    const editedURL = URL + "search?name=" + city + "&count=10&language=es&format=json&countryCode=" + countryCode;

    fetch(editedURL).then((response) => {
        return response.json();
    }).then((data) => {

        console.log(data)
    });
    res.send("works");
}

export default showWheatherData;