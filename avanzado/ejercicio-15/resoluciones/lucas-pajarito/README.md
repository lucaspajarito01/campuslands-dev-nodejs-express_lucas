# Avanzado 15 - seguridad de headers (Lucas Pajarito)

## Que hace

Tematica **comida urbana**. Endurece la seguridad HTTP de la API mediante `app.disable("x-powered-by")` y el middleware `middlewares/security-headers.js`:

- Aplica `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: no-referrer`, `Content-Security-Policy: default-src 'none'` y `Strict-Transport-Security`.
- Exige `Content-Type: application/json` en peticiones de escritura (`POST`), respondiendo `415 Unsupported Media Type` si no se envia.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -i http://localhost:4015/trucks
curl -i -X POST http://localhost:4015/trucks -H "Content-Type: application/json" -d "{\"name\":\"La Parrilla Callejera\",\"specialty\":\"Hamburguesas\"}"
```

## Como probar el caso de error

Enviar `POST` con `text/plain` (dispara `415 Unsupported Media Type`):

```bash
curl -i -X POST http://localhost:4015/trucks -H "Content-Type: text/plain" -d "texto plano"
```

## Estructura

```text
src/
├── app.js
├── server.js
├── middlewares/
│   └── security-headers.js
├── routes/
│   └── trucks.routes.js
├── controllers/
│   └── trucks.controller.js
└── services/
    └── trucks.service.js
```
