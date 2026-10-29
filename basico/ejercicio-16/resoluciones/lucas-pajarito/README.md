# Ejercicio 16 - primer servidor Express (Lucas Pajarito)

## Que hace

Tematica **ropa y sneakers**. Primer servidor Express separado en `app.js` (configuracion de la app, `GET /`, router `GET /health` y middleware 404) y `server.js` (arranque del servidor).

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:3016/
curl http://localhost:3016/health
curl http://localhost:3016/no-existe
```

## Estructura

```text
src/
├── app.js
├── server.js
└── routes/
    └── health.routes.js
```
