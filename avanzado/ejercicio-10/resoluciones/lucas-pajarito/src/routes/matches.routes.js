import { Router } from "express";
import { getMatches, postParseCsv } from "../controllers/matches.controller.js";

const router = Router();

router.get("/", getMatches);
router.post("/parse", postParseCsv);

export default router;
