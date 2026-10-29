import express from "express";
import weaponsRoutes from "./routes/weapons.routes.js";
import { errorHandler } from "./middlewares/error-handler.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "API de shooters escalable activa" });
});

app.use("/weapons", weaponsRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

app.use(errorHandler);

export default app;
