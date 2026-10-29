# Ejercicio 28 - configuracion por entorno (Lucas Pajarito)

## Que hace

Tematica **battle royale**. `config/index.js` gestiona perfiles por entorno segun `NODE_ENV` (`development`, `production`, `test`): capacidad maxima de lobby, nivel de logs y exposicion de rutas de depuracion. Lanza error si se especifica un entorno invalido.

## Como ejecutar

```bash
npm install
npm start
```

En PowerShell para produccion:

```powershell
$env:NODE_ENV="production"; npm start
```

## Como probar

```bash
curl http://localhost:3028/health
curl http://localhost:3028/lobby/limit
curl http://localhost:3028/lobby/debug/config
```

## Estructura

```text
src/
├── app.js
├── server.js
├── config/
│   └── index.js
├── routes/
│   └── lobby.routes.js
└── controllers/
    └── lobby.controller.js
```
