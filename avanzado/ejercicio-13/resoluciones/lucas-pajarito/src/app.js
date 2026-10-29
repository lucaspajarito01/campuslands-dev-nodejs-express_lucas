import express from "express";
import { correlationLogger } from "./middlewares/correlation-logger.js";
import missionsRoutes from "./routes/missions.routes.js";

const app = express();

app.use(correlationLogger);
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, requestId: req.requestId, message: "API de ciencia ficcion observable activa" });
});

app.use("/missions", missionsRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, requestId: req.requestId, message: "Ruta no encontrada" });
});

export default app;
