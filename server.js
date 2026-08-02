import express from 'express';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const api = "https://goweather.xyz/weather/Madrid";

        const response = await fetch(api);
        const data = await response.json();

        res.json(data);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});