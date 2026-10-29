import { Router } from "express";
import { getTrucks, postTruck } from "../controllers/trucks.controller.js";

const router = Router();

router.get("/", getTrucks);
router.post("/", postTruck);

export default router;
