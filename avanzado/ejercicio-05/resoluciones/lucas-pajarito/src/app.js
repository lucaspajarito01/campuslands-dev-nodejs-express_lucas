import express from "express";
import transfersRoutes from "./routes/transfers.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "API de transferencias con transacciones simuladas activa" });
});

app.use(transfersRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

export default app;
