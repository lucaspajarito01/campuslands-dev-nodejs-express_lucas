import express from "express";
import carsRoutes from "./routes/cars.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "API de autos de lujo con cache activa" });
});

app.use("/cars", carsRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

export default app;
