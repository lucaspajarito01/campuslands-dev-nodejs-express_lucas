import express from "express";
import { metricsCollector } from "./middlewares/metrics.middleware.js";
import { getMetricsSnapshot } from "./services/metrics.service.js";
import booksRoutes from "./routes/books.routes.js";

const app = express();

app.use(metricsCollector);
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "API de libros con metricas activa" });
});

app.get("/metrics", (req, res) => {
  res.status(200).json({ ok: true, data: getMetricsSnapshot() });
});

app.use("/books", booksRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

export default app;
