# Ejercicio 12 - async await (Lucas Pajarito)

## Que hace

Tematica **peliculas de miedo**. `movies.service.js` define `fetchMovie` y `fetchRating` como funciones basadas en promesas. `app.js` las ejecuta de forma secuencial usando `async/await` dentro de un bloque `try/catch`.

## Como ejecutar

```bash
npm install
npm start
```

Pasar titulo de pelicula:

```bash
node src/app.js "Hereditary"
```

## Como probar el caso de error

```bash
node src/app.js ""
```

Debe mostrar `Error al buscar pelicula: El titulo de la pelicula es obligatorio`.

## Estructura

```text
src/
├── app.js
└── services/
    └── movies.service.js
```
