import express from 'express';
import path from 'node:path';

import routerLocation from './routes/locationRoute.js';
import routerWheather from './routes/wheatherRoute.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use("/location", routerLocation);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});