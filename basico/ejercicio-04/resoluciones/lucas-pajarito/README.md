# Ejercicio 04 - modulos ES Modules (Lucas Pajarito)

## Que hace

Tematica **battle royale**. Demuestra el uso de ES Modules (`"type": "module"`): `zone.service.js` combina exportacion por defecto (`export default shrinkZone`) y exportaciones nombradas (`MAX_RADIUS`, `shrinkZone`), consumidas en `app.js` con `import shrinkZone, { MAX_RADIUS }`.

## Como ejecutar

```bash
npm install
npm start
```

Opcional, pasar el radio actual de la tormenta:

```bash
node src/app.js 600
```

## Como probar el caso de error

```bash
node -e "import('./src/services/zone.service.js').then(m => m.shrinkZone(-20))"
```

Debe lanzar `Error: El radio actual debe ser mayor a 0`.

## Estructura

```text
src/
├── app.js
└── services/
    └── zone.service.js
```
