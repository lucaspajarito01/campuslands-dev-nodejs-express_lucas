import crypto from "node:crypto";

function correlationLogger(req, res, next) {
  const requestId = req.get("x-request-id") || crypto.randomUUID();
  const start = Date.now();

  req.requestId = requestId;
  res.setHeader("X-Request-Id", requestId);

  res.on("finish", () => {
    const durationMs = Date.now() - start;
    const level = res.statusCode >= 500 ? "error" : res.statusCode >= 400 ? "warn" : "info";

    console.log(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        level,
        requestId,
        method: req.method,
        path: req.originalUrl,
        statusCode: res.statusCode,
        durationMs,
      })
    );
  });

  next();
}

export { correlationLogger };
