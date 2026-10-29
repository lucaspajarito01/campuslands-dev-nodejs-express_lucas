# Avanzado 14 - metricas simples (Lucas Pajarito)

## Que hace

Tematica **libros**. Recolecta metricas operativas en tiempo real mediante `middlewares/metrics.middleware.js` y las expone en `GET /metrics`:

- Total de peticiones (`totalRequests`).
- Conteo por metodo HTTP (`byMethod`).
- Conteo por familia de codigo de estado (`byStatus`).
- Latencia promedio en milisegundos (`avgResponseTimeMs`) y `uptimeSeconds`.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:4014/books
curl -X POST http://localhost:4014/books -H "Content-Type: application/json" -d "{\"title\":\"Ficciones\",\"author\":\"Jorge Luis Borges\"}"
curl http://localhost:4014/metrics
```

## Como probar el caso de error

```bash
curl -X POST http://localhost:4014/books -H "Content-Type: application/json" -d "{\"title\":\"\"}"
curl http://localhost:4014/metrics
```

El error `400` queda contabilizado dentro de `byStatus["400"]` en `/metrics`.

## Estructura

```text
src/
├── app.js
├── server.js
├── middlewares/
│   └── metrics.middleware.js
├── routes/
│   └── books.routes.js
├── controllers/
│   └── books.controller.js
└── services/
    ├── books.service.js
    └── metrics.service.js
```
