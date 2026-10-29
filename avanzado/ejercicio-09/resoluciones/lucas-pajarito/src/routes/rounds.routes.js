import { Router } from "express";
import { getRoundsStream, postAnalyzeRounds } from "../controllers/rounds.controller.js";

const router = Router();

router.get("/stream", getRoundsStream);
router.post("/analyze", postAnalyzeRounds);

export default router;
