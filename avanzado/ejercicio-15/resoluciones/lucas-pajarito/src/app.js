import express from "express";
import { securityHeaders } from "./middlewares/security-headers.js";
import trucksRoutes from "./routes/trucks.routes.js";

const app = express();

app.disable("x-powered-by");
app.use(securityHeaders);
app.use(express.json({ limit: "100kb" }));

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "API de comida urbana con headers seguros activa" });
});

app.use("/trucks", trucksRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

export default app;
