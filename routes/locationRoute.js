import express from "express";
import showLocationsData from "../controllers/locationController.js";

const routerLocation = express.Router();

routerLocation.get("/", (req, res, next) => {
    // console.log("llegó al router");
    next();
}, showLocationsData);

export default routerLocation;