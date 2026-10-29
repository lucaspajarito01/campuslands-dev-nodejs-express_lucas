# Ejercicio 26 - codigos de estado (Lucas Pajarito)

## Que hace

Tematica **shooters competitivos**. El recurso `/matches` demuestra el uso preciso de codigos de estado HTTP:

- `200` listar, consultar o unirse a una partida.
- `201` crear partida.
- `204` eliminar partida.
- `400` parametros o body con formato invalido.
- `401` falta el header `x-player-name` al unirse.
- `404` partida no encontrada.
- `409` conflicto porque la partida ya esta llena.
- `422` `maxPlayers` menor a 2 (regla de negocio).
- `500` error inesperado capturado por `middlewares/error-handler.js`.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -w " [%{http_code}]\n" http://localhost:3026/matches
curl -w " [%{http_code}]\n" -X POST http://localhost:3026/matches -H "Content-Type: application/json" -d "{\"name\":\"Scrim Final\",\"maxPlayers\":2}"
curl -w " [%{http_code}]\n" -X POST http://localhost:3026/matches/1/join -H "x-player-name: Lucas"
curl -w " [%{http_code}]\n" -X POST http://localhost:3026/matches/1/join
curl -w " [%{http_code}]\n" -X POST http://localhost:3026/matches -H "Content-Type: application/json" -d "{\"name\":\"Solo\",\"maxPlayers\":1}"
curl -w " [%{http_code}]\n" http://localhost:3026/matches/debug/crash
curl -w " [%{http_code}]\n" -X DELETE http://localhost:3026/matches/1
```

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── matches.routes.js
├── controllers/
│   └── matches.controller.js
├── services/
│   └── matches.service.js
└── middlewares/
    └── error-handler.js
```
