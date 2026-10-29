# Avanzado 13 - observabilidad y logs (Lucas Pajarito)

## Que hace

Tematica **ciencia ficcion**. Implementa trazabilidad y logs estructurados en formato JSON (`middlewares/correlation-logger.js`):

- Asigna o propaga un identificador de correlacion (`X-Request-Id` con `crypto.randomUUID()`).
- Emite logs JSON estructurados con `timestamp`, `level`, `requestId`, `method`, `path`, `statusCode` y `durationMs`.
- Incluye el `requestId` en todas las respuestas para facilitar la depuracion extremo a extremo.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -i http://localhost:4013/missions
curl -i -H "X-Request-Id: trace-orbital-001" http://localhost:4013/missions
curl -X POST http://localhost:4013/missions -H "Content-Type: application/json" -d "{\"codename\":\"Horizonte Europa\",\"sector\":\"Jupiter\"}"
```

## Como probar el caso de error

```bash
curl -X POST http://localhost:4013/missions -H "Content-Type: application/json" -d "{\"codename\":\"\"}"
```

Responde `400` incluyendo el `requestId` en el cuerpo de error.

## Estructura

```text
src/
├── app.js
├── server.js
├── middlewares/
│   └── correlation-logger.js
├── routes/
│   └── missions.routes.js
├── controllers/
│   └── missions.controller.js
└── services/
    └── missions.service.js
```
