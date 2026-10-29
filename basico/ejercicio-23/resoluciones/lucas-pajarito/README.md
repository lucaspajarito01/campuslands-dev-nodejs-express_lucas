# Ejercicio 23 - datos en memoria (Lucas Pajarito)

## Que hace

Tematica **soldadura**. `welds.service.js` mantiene los registros en un arreglo en memoria durante la vida util del proceso: `GET /welds` lista, `POST /welds` registra una soldadura y `DELETE /welds/:id` la elimina.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:3023/welds
curl -X POST http://localhost:3023/welds -H "Content-Type: application/json" -d "{\"material\":\"acero inoxidable\",\"technique\":\"arco electrico\"}"
curl -X DELETE http://localhost:3023/welds/1
```

## Como probar los casos de error

```bash
curl -X DELETE http://localhost:3023/welds/99
curl -X POST http://localhost:3023/welds -H "Content-Type: application/json" -d "{\"material\":\"acero\"}"
```

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── welds.routes.js
├── controllers/
│   └── welds.controller.js
└── services/
    └── welds.service.js
```
