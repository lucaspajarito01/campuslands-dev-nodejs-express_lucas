import { recordRequestMetric } from "../services/metrics.service.js";

function metricsCollector(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    const durationMs = Date.now() - start;
    recordRequestMetric({
      method: req.method,
      statusCode: res.statusCode,
      durationMs,
    });
  });

  next();
}

export { metricsCollector };
