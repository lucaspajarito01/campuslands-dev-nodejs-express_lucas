import { telemetryBus, listAlerts } from "../events/telemetry.bus.js";

const OVERSPEED_THRESHOLD = 380;
const readings = [];
let nextId = 1;

function recordTelemetry({ car, speedKmh }) {
  if (!car || typeof car !== "string" || !car.trim()) {
    throw new Error("car es obligatorio");
  }

  const numericSpeed = Number(speedKmh);
  if (!speedKmh || Number.isNaN(numericSpeed) || numericSpeed <= 0) {
    throw new Error("speedKmh debe ser un numero mayor a 0");
  }

  const reading = {
    id: nextId++,
    car: car.trim(),
    speedKmh: numericSpeed,
    recordedAt: new Date().toISOString(),
  };

  readings.push(reading);
  telemetryBus.emit("telemetry:recorded", reading);

  if (numericSpeed > OVERSPEED_THRESHOLD) {
    telemetryBus.emit("telemetry:overspeed", reading);
  }

  return reading;
}

function listReadings() {
  return readings;
}

export { recordTelemetry, listReadings, listAlerts };
