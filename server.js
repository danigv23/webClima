import express from 'express';
import router from './routes/weather.js';

const app = express();
const port = 3000;

app.use("/", router);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
