# Avanzado 12 - exportacion JSON (Lucas Pajarito)

## Que hace

Tematica **peliculas de miedo**. Permite exportar el catalogo filtrado de peliculas de terror como un archivo JSON descargable (`Content-Disposition: attachment; filename="horror-movies-export.json"`) con metadatos de exportacion (`exportedAt`, `totalRecords`, `filters`, `items`).

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -i "http://localhost:4012/movies/export?minYear=1980"
curl "http://localhost:4012/movies/export?subgenre=sobrenatural"
```

## Como probar el caso de error

```bash
curl "http://localhost:4012/movies/export?minYear=invalido"
```

Responde `400` con `minYear debe ser numerico`.

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── movies.routes.js
├── controllers/
│   └── movies.controller.js
└── services/
    └── export.service.js
```
