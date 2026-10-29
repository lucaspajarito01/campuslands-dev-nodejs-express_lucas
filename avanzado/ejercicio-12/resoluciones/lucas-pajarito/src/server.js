import app from "./app.js";

const PORT = process.env.PORT || 4012;

app.listen(PORT, () => {
  console.log(`API de exportacion JSON escuchando en http://localhost:${PORT}`);
});
