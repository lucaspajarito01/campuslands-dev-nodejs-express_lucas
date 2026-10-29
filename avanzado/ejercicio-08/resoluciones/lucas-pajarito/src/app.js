import express from "express";
import telemetryRoutes from "./routes/telemetry.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "API de telemetria con EventEmitter activa" });
});

app.use("/telemetry", telemetryRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

export default app;
