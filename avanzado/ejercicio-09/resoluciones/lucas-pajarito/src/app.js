import express from "express";
import roundsRoutes from "./routes/rounds.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "API de kickboxing con streams activa" });
});

app.use("/rounds", roundsRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

export default app;
