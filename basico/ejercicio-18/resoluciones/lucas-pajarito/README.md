# Ejercicio 18 - rutas POST (Lucas Pajarito)

## Que hace

Tematica **paracaidismo**. `POST /jumps` registra un nuevo salto en paracaidas (`diverName`, `altitude`) validando el body JSON y respondiendo `201 Created`; `GET /jumps` lista los saltos registrados.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -X POST http://localhost:3018/jumps -H "Content-Type: application/json" -d "{\"diverName\":\"Lucas\",\"altitude\":4200}"
curl http://localhost:3018/jumps
```

## Como probar el caso de error

```bash
curl -X POST http://localhost:3018/jumps -H "Content-Type: application/json" -d "{\"diverName\":\"Lucas\"}"
```

Responde `400` con `altitude debe ser un numero mayor a 0`.

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── jumps.routes.js
├── controllers/
│   └── jumps.controller.js
└── services/
    └── jumps.service.js
```
