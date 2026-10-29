# Ejercicio 10 - funciones asincronas (Lucas Pajarito)

## Que hace

Tematica **pingpong**. `rally.service.js` implementa `playRally(playerName, callback)` usando `setTimeout` y el patron error-first callback sin bloquear el hilo principal. `app.js` demuestra que las instrucciones posteriores se ejecutan antes de que termine el rally asincrono.

## Como ejecutar

```bash
npm install
npm start
```

Opcional, pasar nombre del jugador:

```bash
node src/app.js "Ma Long"
```

## Como probar el caso de error

```bash
node src/app.js ""
```

Debe mostrar `Error en el rally: El nombre del jugador es obligatorio`.

## Estructura

```text
src/
├── app.js
└── services/
    └── rally.service.js
```
