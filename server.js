import express from 'express';
import router from './routes/weather.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    res.send("Hola fasdfasdfsd");
});

console.log(router)

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
