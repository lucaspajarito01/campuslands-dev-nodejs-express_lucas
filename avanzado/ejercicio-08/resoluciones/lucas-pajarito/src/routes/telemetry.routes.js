import { Router } from "express";
import { getTelemetry, getTelemetryAlerts, postTelemetry } from "../controllers/telemetry.controller.js";

const router = Router();

router.get("/", getTelemetry);
router.get("/alerts", getTelemetryAlerts);
router.post("/", postTelemetry);

export default router;
