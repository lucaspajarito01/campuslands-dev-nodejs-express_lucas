import { Router } from "express";
import { getCharactersV2, getCharacterV2, postCharacterV2 } from "../../controllers/characters.v2.controller.js";

const router = Router();

router.get("/", getCharactersV2);
router.get("/:id", getCharacterV2);
router.post("/", postCharacterV2);

export default router;
