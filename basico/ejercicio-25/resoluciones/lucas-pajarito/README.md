# Ejercicio 25 - respuestas HTTP correctas (Lucas Pajarito)

## Que hace

Tematica **videojuegos RPG**. `utils/respond.js` centraliza el formato de respuestas HTTP (`{ ok, data }` y `{ ok, message }`). El recurso `/quests` demuestra el uso de `201 Created` con header `Location`, `200 OK`, `204 No Content` sin body, `400` y `404`.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:3025/quests
curl -i -X POST http://localhost:3025/quests -H "Content-Type: application/json" -d "{\"title\":\"Forjar escudo real\",\"reward\":300}"
curl -i -X DELETE http://localhost:3025/quests/1
```

## Como probar los casos de error

```bash
curl http://localhost:3025/quests/99
curl http://localhost:3025/quests/abc
```

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── quests.routes.js
├── controllers/
│   └── quests.controller.js
├── services/
│   └── quests.service.js
└── utils/
    └── respond.js
```
