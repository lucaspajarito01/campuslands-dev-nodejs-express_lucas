# Ejercicio 13 - manejo de errores (Lucas Pajarito)

## Que hace

Tematica **ciencia ficcion**. Define clases de error personalizadas en `errors.js` (`WarpError`, `InvalidCoordinatesError`, `InsufficientFuelError`). `warp.service.js` valida el salto hiperespacial y `app.js` distingue cada error usando `instanceof`.

## Como ejecutar

```bash
npm install
npm start -- "Alpha Centauri" 90
```

O directamente:

```bash
node src/app.js "Alpha Centauri" 90
```

## Como probar los casos de error

Coordenadas invalidas:

```bash
node src/app.js "" 90
```

Combustible insuficiente:

```bash
node src/app.js "Alpha Centauri" 20
```

## Estructura

```text
src/
├── app.js
└── services/
    ├── errors.js
    └── warp.service.js
```
