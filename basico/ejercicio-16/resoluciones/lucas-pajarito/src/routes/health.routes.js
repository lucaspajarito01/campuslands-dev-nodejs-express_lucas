import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ ok: true, message: "Sneaker & Streetwear API activa" });
});

export default router;
