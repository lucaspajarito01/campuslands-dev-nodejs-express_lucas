# Ejercicio 07 - process.argv y CLI (Lucas Pajarito)

## Que hace

Tematica **autos de lujo**. `quote.service.js` procesa argumentos CLI con formato `--brand=Marca --price=Monto` desde `process.argv`, valida los parametros y calcula el impuesto de lujo (8%) junto al precio final.

## Como ejecutar

```bash
npm install
npm start -- --brand=Porsche --price=240000
```

O directamente con Node:

```bash
node src/app.js --brand=Porsche --price=240000
```

## Como probar el caso de error

```bash
node src/app.js --brand=Porsche
```

Debe mostrar `Error al cotizar: --price debe ser un numero mayor a 0`.

## Estructura

```text
src/
├── app.js
└── services/
    └── quote.service.js
```
