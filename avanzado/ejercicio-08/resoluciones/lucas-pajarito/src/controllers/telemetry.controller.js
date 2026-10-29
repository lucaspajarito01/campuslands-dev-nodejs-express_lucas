import { recordTelemetry, listReadings, listAlerts } from "../services/telemetry.service.js";

function getTelemetry(req, res) {
  res.status(200).json({ ok: true, data: listReadings() });
}

function getTelemetryAlerts(req, res) {
  res.status(200).json({ ok: true, data: listAlerts() });
}

function postTelemetry(req, res) {
  try {
    const reading = recordTelemetry(req.body || {});
    res.status(201).json({ ok: true, data: reading });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
}

export { getTelemetry, getTelemetryAlerts, postTelemetry };
