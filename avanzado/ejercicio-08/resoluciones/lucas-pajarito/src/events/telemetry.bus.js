import { EventEmitter } from "node:events";

const telemetryBus = new EventEmitter();
const alerts = [];

telemetryBus.on("telemetry:overspeed", (reading) => {
  alerts.push({
    id: alerts.length + 1,
    car: reading.car,
    speedKmh: reading.speedKmh,
    message: `Alerta Pit Wall: ${reading.car} supero los 380 km/h (${reading.speedKmh} km/h)`,
    createdAt: new Date().toISOString(),
  });
});

function listAlerts() {
  return alerts;
}

export { telemetryBus, listAlerts };
