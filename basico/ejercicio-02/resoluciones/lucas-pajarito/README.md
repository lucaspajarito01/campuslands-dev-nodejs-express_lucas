# Ejercicio 02 - npm scripts y package.json (Lucas Pajarito)

## Que hace

Proyecto con tematica de **shooters competitivos**. Configura `package.json` con tres scripts (`start`, `dev`, `info`). El script principal genera el equipamiento tactico (loadout) de un jugador competitivo, mientras que `npm run info` lee el propio `package.json` y muestra los metadatos y scripts disponibles.

## Como ejecutar

```bash
npm install
npm start
npm run dev
npm run info
```

Opcional, pasar el alias del jugador por consola:

```bash
node src/app.js Phantom
```

## Como probar el caso de error

```bash
node -e "import('./src/services/loadout.service.js').then(m => m.createLoadout(''))"
```

Debe lanzar `Error: El nombre del jugador es obligatorio`.

## Estructura

```text
src/
├── app.js
├── info.js
└── services/
    └── loadout.service.js
```
