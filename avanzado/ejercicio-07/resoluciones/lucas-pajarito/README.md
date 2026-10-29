# Avanzado 07 - cache en memoria (Lucas Pajarito)

## Que hace

Tematica **autos de lujo**. Implementa un servicio de cache en memoria con **TTL (Time-To-Live)**, conteo de `hits`/`misses`, header `X-Cache: HIT | MISS` e **invalidacion automatica** al registrar un nuevo vehiculo con `POST /cars`.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -i http://localhost:4007/cars
curl -i http://localhost:4007/cars
curl http://localhost:4007/cars/cache/stats
curl -X POST http://localhost:4007/cars -H "Content-Type: application/json" -d "{\"brand\":\"Bentley\",\"model\":\"Continental GT\",\"price\":245000}"
curl -i http://localhost:4007/cars
```

La primera llamada a `GET /cars` devuelve `X-Cache: MISS`, la segunda `X-Cache: HIT`, y tras `POST /cars` se invalida el cache volviendo a `X-Cache: MISS`.

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── cars.routes.js
├── controllers/
│   └── cars.controller.js
└── services/
    ├── cache.service.js
    └── cars.service.js
```
