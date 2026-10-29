import { buildExportBundle } from "../services/export.service.js";

function exportMoviesJson(req, res) {
  try {
    const bundle = buildExportBundle(req.query);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Content-Disposition", 'attachment; filename="horror-movies-export.json"');
    res.status(200).send(JSON.stringify(bundle, null, 2));
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
}

export { exportMoviesJson };
