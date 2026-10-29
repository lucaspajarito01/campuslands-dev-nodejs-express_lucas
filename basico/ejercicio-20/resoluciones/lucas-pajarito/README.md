# Ejercicio 20 - middleware express.json (Lucas Pajarito)

## Que hace

Tematica **dibujo digital**. Usa `express.json()` para parsear el body de `POST /brushes` e implementa `middlewares/json-error-handler.js` para capturar cuerpos con JSON malformado y responder `400` en formato JSON limpio.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -X POST http://localhost:3020/brushes -H "Content-Type: application/json" -d "{\"name\":\"Aerografo suave\",\"size\":16}"
```

## Como probar los casos de error

Body incompleto:

```bash
curl -X POST http://localhost:3020/brushes -H "Content-Type: application/json" -d "{\"name\":\"Aerografo\"}"
```

JSON malformado:

```bash
curl -X POST http://localhost:3020/brushes -H "Content-Type: application/json" -d "{name: pincel,}"
```

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── brushes.routes.js
├── controllers/
│   └── brushes.controller.js
├── services/
│   └── brushes.service.js
└── middlewares/
    └── json-error-handler.js
```
