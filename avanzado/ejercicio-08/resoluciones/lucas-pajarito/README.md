# Avanzado 08 - event emitter (Lucas Pajarito)

## Que hace

Tematica **hiperdeportivos**. Utiliza `EventEmitter` de `node:events` (`src/events/telemetry.bus.js`) para desacoplar el registro de telemetria de pista de sus efectos secundarios:

- Al registrar una lectura con `POST /telemetry`, el servicio emite `telemetry:recorded` y, si supera los `380 km/h`, emite `telemetry:overspeed`.
- Los suscriptores actualizan las alertas de Pit Wall sin acoplar el controlador ni el servicio principal.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -X POST http://localhost:4008/telemetry -H "Content-Type: application/json" -d "{\"car\":\"Koenigsegg Jesko\",\"speedKmh\":412}"
curl http://localhost:4008/telemetry
curl http://localhost:4008/telemetry/alerts
```

## Como probar el caso de error

```bash
curl -X POST http://localhost:4008/telemetry -H "Content-Type: application/json" -d "{\"car\":\"Jesko\",\"speedKmh\":-20}"
```

Responde `400`.

## Estructura

```text
src/
├── app.js
├── server.js
├── events/
│   └── telemetry.bus.js
├── routes/
│   └── telemetry.routes.js
├── controllers/
│   └── telemetry.controller.js
└── services/
    └── telemetry.service.js
```
