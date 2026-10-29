# Avanzado 10 - lectura de CSV (Lucas Pajarito)

## Que hace

Tematica **pingpong**. Lee y parsea `src/data/matches.csv` linea por linea usando `createReadStream` y `node:readline`, validando cabeceras y puntajes numericos:

- `GET /matches`: devuelve los partidos leidos desde el CSV y permite filtrar por jugador (`?player=Lucas`).
- `POST /matches/parse`: recibe contenido CSV en el body (`{ "csv": "..." }`) y valida su estructura.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:4010/matches
curl "http://localhost:4010/matches?player=Lucas"
```

## Como probar el caso de error

```bash
curl -X POST http://localhost:4010/matches/parse -H "Content-Type: application/json" -d "{\"csv\":\"playerA,playerB,scoreA,scoreB\nLucas,Marco,abc,7\"}"
```

Responde `400` indicando la fila con puntaje invalido.

## Estructura

```text
src/
├── app.js
├── server.js
├── data/
│   └── matches.csv
├── routes/
│   └── matches.routes.js
├── controllers/
│   └── matches.controller.js
└── services/
    └── csv-reader.service.js
```
