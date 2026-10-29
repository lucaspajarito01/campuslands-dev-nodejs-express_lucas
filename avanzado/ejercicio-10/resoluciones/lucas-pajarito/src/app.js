import express from "express";
import matchesRoutes from "./routes/matches.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "API de pingpong con lectura CSV activa" });
});

app.use("/matches", matchesRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

export default app;
