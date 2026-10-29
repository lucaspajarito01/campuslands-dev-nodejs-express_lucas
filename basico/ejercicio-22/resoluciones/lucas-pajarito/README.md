# Ejercicio 22 - servicios simples (Lucas Pajarito)

## Que hace

Tematica **arquitectura 3D**. `render-budget.service.js` encapsula una funcion pura de negocio (sin `req` ni `res`) que calcula el presupuesto de un render arquitectonico 3D. Se reutiliza tanto desde Express (`POST /renders/budget`) como desde un script CLI (`npm run quick-budget`).

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -X POST http://localhost:3022/renders/budget -H "Content-Type: application/json" -d "{\"width\":1920,\"height\":1080,\"complexity\":\"alta\"}"
```

Uso directo del servicio por consola:

```bash
npm run quick-budget
```

## Como probar el caso de error

```bash
curl -X POST http://localhost:3022/renders/budget -H "Content-Type: application/json" -d "{\"width\":1920,\"height\":1080,\"complexity\":\"extrema\"}"
```

Responde `400` con `complexity debe ser 'baja', 'media' o 'alta'`.

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── render.routes.js
├── controllers/
│   └── render.controller.js
├── services/
│   └── render-budget.service.js
└── scripts/
    └── quick-budget.js
```
