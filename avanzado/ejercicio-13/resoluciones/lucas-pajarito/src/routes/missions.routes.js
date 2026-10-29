import { Router } from "express";
import { getMissions, postMission } from "../controllers/missions.controller.js";

const router = Router();

router.get("/", getMissions);
router.post("/", postMission);

export default router;
