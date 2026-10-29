# Ejercicio 17 - rutas GET (Lucas Pajarito)

## Que hace

Tematica **viajes y turismo**. Expone `GET /destinations` para listar destinos turisticos y `GET /destinations/:id` para consultar un destino puntual, respondiendo `400` si el `id` no es numerico y `404` si no existe.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:3017/destinations
curl http://localhost:3017/destinations/2
curl http://localhost:3017/destinations/99
curl http://localhost:3017/destinations/abc
```

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── destinations.routes.js
├── controllers/
│   └── destinations.controller.js
├── services/
│   └── destinations.service.js
└── data/
    └── destinations.json
```
