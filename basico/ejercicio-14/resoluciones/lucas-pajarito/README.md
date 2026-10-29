# Ejercicio 14 - validacion de entrada (Lucas Pajarito)

## Que hace

Tematica **libros**. `book-validator.service.js` valida `title`, `author`, `pages` y `year` acumulando todos los errores encontrados en un arreglo `errors` antes de responder.

## Como ejecutar

```bash
npm install
npm start -- "Rayuela" "Julio Cortazar" 600 1963
```

O directamente:

```bash
node src/app.js "Rayuela" "Julio Cortazar" 600 1963
```

## Como probar el caso de error

```bash
node src/app.js "" "" -10 3050
```

Lista los 4 errores de validacion acumulados.

## Estructura

```text
src/
├── app.js
└── services/
    └── book-validator.service.js
```
