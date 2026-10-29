function sendSuccess(res, statusCode, data) {
  res.status(statusCode).json({ ok: true, data });
}

function sendError(res, statusCode, message) {
  res.status(statusCode).json({ ok: false, message });
}

function sendNoContent(res) {
  res.status(204).end();
}

export { sendSuccess, sendError, sendNoContent };
