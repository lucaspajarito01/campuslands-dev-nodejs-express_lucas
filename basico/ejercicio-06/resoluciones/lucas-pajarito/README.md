# Ejercicio 06 - path y rutas seguras (Lucas Pajarito)

## Que hace

Tematica **motos y mecanica**. Construye rutas seguras hacia manuales de taller usando `path.basename` y `path.resolve`, verificando con `startsWith` que el archivo solicitado permanezca dentro de `src/data/manuals/` para evitar ataques de Path Traversal (`../`).

## Como ejecutar

```bash
npm install
npm start
```

Consultar un manual especifico:

```bash
node src/app.js carburador
```

## Como probar el caso de error

Intento de path traversal o manual inexistente:

```bash
node src/app.js "../../package"
```

Debe mostrar `Error al leer manual: Manual de "package" no encontrado`.

## Estructura

```text
src/
├── app.js
├── data/
│   └── manuals/
│       ├── carburador.txt
│       └── frenos.txt
└── services/
    └── manuals.service.js
```
