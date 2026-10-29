# Avanzado 09 - streams basicos (Lucas Pajarito)

## Que hace

Tematica **kickboxing**. Utiliza `Readable` y `Transform` de `node:stream` junto con `pipeline` de `node:stream/promises` para procesar asaltos de combate chunk por chunk:

- `GET /rounds/stream`: transmite en streaming (NDJSON) las estadisticas calculadas por asalto usando `pipeline(readable, transform, res)`.
- `POST /rounds/analyze`: procesa una lista de asaltos mediante un stream `Transform` y devuelve el puntaje acumulado.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:4009/rounds/stream
curl -X POST http://localhost:4009/rounds/analyze -H "Content-Type: application/json" -d "{\"rounds\":[{\"round\":1,\"strikes\":28,\"kicks\":12},{\"round\":2,\"strikes\":34,\"kicks\":15}]}"
```

## Como probar el caso de error

```bash
curl -X POST http://localhost:4009/rounds/analyze -H "Content-Type: application/json" -d "{\"rounds\":[]}"
```

Responde `400`.

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── rounds.routes.js
├── controllers/
│   └── rounds.controller.js
└── services/
    └── rounds-stream.service.js
```
