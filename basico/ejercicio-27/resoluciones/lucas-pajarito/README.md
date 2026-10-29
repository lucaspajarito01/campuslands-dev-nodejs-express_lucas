# Ejercicio 27 - logs simples (Lucas Pajarito)

## Que hace

Tematica **MOBA esports**. `middlewares/request-logger.js` intercepta cada peticion HTTP y al finalizar (`res.on("finish")`) imprime en consola la marca de tiempo ISO, metodo HTTP, ruta, codigo de estado y tiempo de respuesta en milisegundos.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:3027/heroes
curl -X POST http://localhost:3027/heroes -H "Content-Type: application/json" -d "{\"name\":\"Juggernaut\",\"role\":\"Carry\"}"
curl http://localhost:3027/no-existe
```

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── heroes.routes.js
├── controllers/
│   └── heroes.controller.js
├── services/
│   └── heroes.service.js
└── middlewares/
    └── request-logger.js
```
