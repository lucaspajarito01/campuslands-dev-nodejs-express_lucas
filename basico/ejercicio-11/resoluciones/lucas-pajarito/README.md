# Ejercicio 11 - promesas basicas (Lucas Pajarito)

## Que hace

Tematica **musica**. `playlist.service.js` expone `playTrack(trackName)` retornando una `Promise` que resuelve luego de simular la carga de la pista o se rechaza si el nombre esta vacio. `app.js` consume la promesa con `.then()` y `.catch()`.

## Como ejecutar

```bash
npm install
npm start
```

Pasar una cancion por argumento:

```bash
node src/app.js "Stairway to Heaven"
```

## Como probar el caso de error

```bash
node src/app.js ""
```

Debe mostrar `Error al reproducir: El nombre de la cancion es obligatorio`.

## Estructura

```text
src/
├── app.js
└── services/
    └── playlist.service.js
```
