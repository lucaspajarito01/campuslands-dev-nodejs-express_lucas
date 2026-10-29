# Ejercicio 15 - mini API HTTP nativa (Lucas Pajarito)

## Que hace

Tematica **comida urbana**. Servidor HTTP construido unicamente con el modulo nativo `node:http` (sin Express). Expone `GET /health`, `GET /menu` (leyendo `src/data/menu.json`) y manejo `404` para rutas no existentes.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:3015/health
curl http://localhost:3015/menu
curl http://localhost:3015/no-existe
```

## Estructura

```text
src/
├── server.js
└── data/
    └── menu.json
```
