import express from "express";
import lol from "../controllers/lolete.js";

const router = express.Router();

router.get("/tiempo", lol);

export default router;