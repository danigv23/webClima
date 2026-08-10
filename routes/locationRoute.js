import express from "express";
import formattedUserData from "../controllers/locationController.js";

const routerLocation = express.Router();

routerLocation.get("/", (req, res, next) => {
    console.log("llegó al router");
    next();
}, formattedUserData);

export default routerLocation;