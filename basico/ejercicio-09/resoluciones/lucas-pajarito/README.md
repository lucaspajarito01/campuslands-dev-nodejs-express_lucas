# Ejercicio 09 - JSON y persistencia simple (Lucas Pajarito)

## Que hace

Tematica **kickboxing**. `fighters.service.js` lee y escribe `src/data/fighters.json` usando `readFile` y `writeFile` de `node:fs/promises`. Permite listar los peleadores registrados y persistir nuevos peleadores validando su nombre y peso.

## Como ejecutar

```bash
npm install
npm start
```

Registrar y persistir un nuevo peleador:

```bash
node src/app.js "Marco Silva" 70
```

## Como probar el caso de error

```bash
node src/app.js "Marco Silva"
```

Debe mostrar `Error de persistencia: El peso debe ser un numero mayor a 0`.

## Estructura

```text
src/
├── app.js
├── data/
│   └── fighters.json
└── services/
    └── fighters.service.js
```
