# Ejercicio 21 - estructura src routes controllers (Lucas Pajarito)

## Que hace

Tematica **animacion 3D**. Consolida la arquitectura por capas: `routes/index.js` centraliza el router de la aplicacion y monta `scenes.routes.js`, que delega en `controllers/scenes.controller.js` y `services/scenes.service.js`.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:3021/scenes
curl http://localhost:3021/scenes/1
curl -X POST http://localhost:3021/scenes -H "Content-Type: application/json" -d "{\"name\":\"Batalla en nebulosa\",\"frames\":360}"
```

## Como probar los casos de error

```bash
curl http://localhost:3021/scenes/99
curl http://localhost:3021/scenes/abc
```

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   ├── index.js
│   └── scenes.routes.js
├── controllers/
│   └── scenes.controller.js
└── services/
    └── scenes.service.js
```
