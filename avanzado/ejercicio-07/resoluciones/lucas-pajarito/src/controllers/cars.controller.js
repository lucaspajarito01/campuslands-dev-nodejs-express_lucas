import { listCarsWithCache, createCar } from "../services/cars.service.js";
import { getStats } from "../services/cache.service.js";

function getCars(req, res) {
  const { source, data } = listCarsWithCache();
  res.set("X-Cache", source === "cache" ? "HIT" : "MISS");
  res.status(200).json({ ok: true, source, data });
}

function getCacheStats(req, res) {
  res.status(200).json({ ok: true, data: getStats() });
}

function postCar(req, res) {
  try {
    const created = createCar(req.body || {});
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
}

export { getCars, getCacheStats, postCar };
