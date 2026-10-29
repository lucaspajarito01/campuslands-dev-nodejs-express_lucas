# Avanzado 01 - diseno API versionada (Lucas Pajarito)

## Que hace

Tematica **videojuegos RPG**. Implementa versionado de API por ruta (`/api/v1/characters` y `/api/v2/characters`) compartiendo la capa de servicio pero adaptando el contrato de salida sin romper clientes antiguos:

- **v1 (`/api/v1/characters`)**: devuelve la estructura plana original (`{ id, name, className, level }`) e incluye headers HTTP de deprecacion (`Deprecation: true`, `Sunset`, `X-API-Version: v1`).
- **v2 (`/api/v2/characters`)**: devuelve un contrato enriquecido (`{ id, name, role, progression: { level, xp }, stats: { hp, mp } }`) y permite crear personajes con `POST /api/v2/characters`.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl -i http://localhost:4001/api/v1/characters
curl -i http://localhost:4001/api/v2/characters
curl -X POST http://localhost:4001/api/v2/characters -H "Content-Type: application/json" -d "{\"name\":\"Rey\",\"role\":\"Paladin\",\"level\":5}"
```

## Como probar el caso de error

```bash
curl -X POST http://localhost:4001/api/v2/characters -H "Content-Type: application/json" -d "{\"name\":\"\",\"role\":\"Paladin\",\"level\":0}"
```

Responde `400` indicando el error de validacion.

## Estructura

```text
src/
├── app.js
├── server.js
├── middlewares/
│   └── deprecation.js
├── routes/
│   ├── v1/
│   │   └── characters.routes.js
│   └── v2/
│       └── characters.routes.js
├── controllers/
│   ├── characters.v1.controller.js
│   └── characters.v2.controller.js
└── services/
    └── characters.service.js
```
