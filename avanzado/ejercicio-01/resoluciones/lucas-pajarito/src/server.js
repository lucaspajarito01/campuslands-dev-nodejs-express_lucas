import app from "./app.js";

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`API RPG versionada escuchando en http://localhost:${PORT}`);
});
