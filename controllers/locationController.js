let showLocationsData = (req, res) => {
    const userData = formattedUserData(req.query);

    locationsData(userData).then((locations) => {
        console.log(locations)
        res.send(locations);
    });
};

function formattedUserData(reqBody) {
    const PAISES = {
        "andorra": ["AD", 10],
        "emiratos Arabes": ["AE", 11],
        "albania": ["AL", 12],
        "antartida": ["AQ", 13],
        "argentina": ["AR", 14],
        "austria": ["AT", 15],
        "australia": ["AU", 16],
        "bangladesh": ["BD", 17],
        "belgica": ["BE", 18],
        "bulgaria": ["BG", 19],
        "bolivia": ["BO", 20],
        "brasil": ["BR", 21],
        "bielorusia": ["BY", 22],
        "canada": ["CA", 23],
        "republica del Congo": ["CD", 24],
        "suiza": ["CH", 25],
        "chile": ["CL", 26],
        "china": ["CN", 27],
        "colombia": ["CO", 28],
        "cuba": ["CU", 29],
        "republica checa": ["CZ", 30],
        "alemania": ["DE", 31],
        "dinamarca": ["DK", 32],
        "republica Dominicana": ["DO", 33],
        "algeria": ["DZ", 34],
        "ecuador": ["EC", 35],
        "egipto": ["EG", 36],
        "españa": ["ES", 37],
        "finlandia": ["FI", 38],
        "francia": ["FR", 39],
        "gran Bretaña": ["GB", 40],
        "ghana": ["GH", 41],
        "grecia": ["GR", 42],
        "croacia": ["HR", 43],
        "hungria": ["HU", 44],
        "indonesia": ["ID", 45],
        "india": ["IN", 46],
        "irak": ["IQ", 47],
        "italia": ["IT", 48],
        "jamaica": ["JM", 49],
        "japon": ["JP", 50],
        "kenia": ["KE", 51],
        "marruecos": ["MA", 52],
        "monaco": ["MC", 53],
        "mongolia": ["MN", 54],
        "malta": ["MT", 55],
        "mauritania": ["MU", 56],
        "mexico": ["MX", 57],
        "malasia": ["MY", 58],
        "nigeria": ["NG", 59],
        "nicaragua": ["NI", 60],
        "holanda": ["NL", 61],
        "noruega": ["NO", 62],
        "panama": ["PA", 63],
        "peru": ["PE", 64],
        "polonia": ["PL", 65],
        "puerto Rico": ["PR", 66],
        "portugal": ["PT", 67],
        "qatar": ["QA", 68],
        "serbia": ["RS", 69],
        "rusia": ["RU", 70],
        "arabia Saudita": ["SA", 71],
        "suecia": ["SE", 72],
        "eslovenia": ["SI", 73],
        "senegal": ["SN", 74],
        "thailandia": ["TH", 75],
        "tanzania": ["TZ", 76],
        "ucrania": ["UA", 77],
        "estados Unidos": ["US", 78],
        "uruguay": ["UY", 79],
        "venezuela": ["VE", 80],
        "yemen": ["YE", 81],
        "sud Africa": ["ZA", 82],
        "zambia": ["ZM", 83]
    };

    const userCountry = reqBody.pais.toLowerCase();
    const userCity = reqBody.ciudad;

    let countryCode = undefined;
    let i = 0;

    while (countryCode === undefined) {
        if ((Object.keys(PAISES))[i] == userCountry) {
            let country = (Object.keys(PAISES))[i];
            countryCode = PAISES[country][0];
        };
        i++;
    };

    const userRequest = [userCity, countryCode]

    return userRequest;
};

function locationsData(userData) {
    const URL = "https://geocoding-api.open-meteo.com/v1/";

    const editedURL = URL + "search?name=" + userData[0] + "&count=10&language=es&format=json&countryCode=" + userData[1];

    return fetch(editedURL)
        .then((response) => {
            return response.json();
        });
};

export default showLocationsData;