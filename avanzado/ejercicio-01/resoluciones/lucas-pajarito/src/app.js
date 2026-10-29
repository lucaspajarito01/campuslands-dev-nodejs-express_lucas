import express from "express";
import v1CharactersRoutes from "./routes/v1/characters.routes.js";
import v2CharactersRoutes from "./routes/v2/characters.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "API RPG versionada activa",
    versions: ["v1", "v2"],
  });
});

app.use("/api/v1/characters", v1CharactersRoutes);
app.use("/api/v2/characters", v2CharactersRoutes);

app.use((req, res) => {
  res.status(404).json({ ok: false, message: "Ruta no encontrada" });
});

export default app;
