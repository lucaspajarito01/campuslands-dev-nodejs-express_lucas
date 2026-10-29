import { Router } from "express";
import { getCars, getCacheStats, postCar } from "../controllers/cars.controller.js";

const router = Router();

router.get("/cache/stats", getCacheStats);
router.get("/", getCars);
router.post("/", postCar);

export default router;
