import { Router } from "express";
import { getCharactersV1, getCharacterV1 } from "../../controllers/characters.v1.controller.js";
import { deprecationHeader } from "../../middlewares/deprecation.js";

const router = Router();

router.use(deprecationHeader("2027-01-01"));
router.get("/", getCharactersV1);
router.get("/:id", getCharacterV1);

export default router;
