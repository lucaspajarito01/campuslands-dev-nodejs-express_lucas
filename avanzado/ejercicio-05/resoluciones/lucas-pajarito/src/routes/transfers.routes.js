import { Router } from "express";
import { getClubs, postTransfer } from "../controllers/transfers.controller.js";

const router = Router();

router.get("/clubs", getClubs);
router.post("/transfers", postTransfer);

export default router;
