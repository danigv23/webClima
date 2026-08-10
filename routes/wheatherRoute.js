import express from "express";
import lol from "../controllers/lolete.js";

const routerWheather = express.Router();

routerWheather.get("/tiempo", lol);

export default routerWheather;