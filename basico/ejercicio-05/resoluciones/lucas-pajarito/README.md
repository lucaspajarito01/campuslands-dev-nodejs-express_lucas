# Ejercicio 05 - fs para leer archivos (Lucas Pajarito)

## Que hace

Tematica **futbol y futbol sala**. Utiliza `readFile` de `node:fs/promises` en `players.service.js` para leer `src/data/players.json`, parsear el listado de jugadores y consultar un jugador por `id`. Valida que el `id` sea un entero positivo y maneja el caso de jugador inexistente.

## Como ejecutar

```bash
npm install
npm start
```

Consultar un jugador por `id`:

```bash
node src/app.js 2
```

## Como probar el caso de error

```bash
node src/app.js 99
```

Debe mostrar `Error al leer jugador: Jugador con id 99 no encontrado`.

## Estructura

```text
src/
├── app.js
├── data/
│   └── players.json
└── services/
    └── players.service.js
```
