function securityHeaders(req, res, next) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  res.setHeader("Permissions-Policy", "geolocation=(), camera=(), microphone=()");

  if (["POST", "PUT", "PATCH"].includes(req.method) && !req.is("application/json")) {
    res.status(415).json({
      ok: false,
      message: "Content-Type debe ser application/json",
    });
    return;
  }

  next();
}

export { securityHeaders };
