const baseURL = "https://geocoding-api.open-meteo.com/v1/";

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

function formattedUserData(reqQuery) {
    let userData = [];
    userData.push(reqQuery.ciudad);

    for (const [key, values] of Object.entries(reqQuery)) {
        if (key == "pais") userData.push(PAISES[values.toLowerCase()][0]);
    };

    return userData;
};

function locationsData(userData) {
    const params = {
        name: userData[0],
        count: 10,
        language: "es",
        format: "json",
        countryCode: userData[1],
    };

    const filteredParams = Object.fromEntries((Object.entries(params))
        .filter(([key, value]) => value !== undefined));


    return fetch(`${baseURL}search?${new URLSearchParams(filteredParams)}`)
        .then((response) => {
            if (!response.ok) throw new Error(`Error API ${response.status}`);
            return response.json();
        });
};

const showLocationsData = (req, res) => {
    try {
        const userData = formattedUserData(req.query);

        locationsData(userData)
            .then((locations) => res.send(locations))
            .catch((error) => {
                console.log(error);
                res.status(500).send({ error: "Error al obtener la localizacion" });
            });
    } catch (error) {
        res.status(400).send({ error: error.message });
    };
};

export default showLocationsData;