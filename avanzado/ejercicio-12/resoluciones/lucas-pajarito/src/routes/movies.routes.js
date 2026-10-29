import { Router } from "express";
import { exportMoviesJson } from "../controllers/movies.controller.js";

const router = Router();

router.get("/export", exportMoviesJson);

export default router;
