# API de Equipos - Futbol y Futbol Sala (Lucas Pajarito)

API REST para registrar y consultar equipos de **futbol** y **futbol sala**. Este ejercicio se enfoca en proveer un **README tecnico** claro, completo y reproducible para otros desarrolladores.

## Requisitos

- Node.js 20 o superior.
- npm.

## Instalacion

```bash
npm install
```

## Ejecucion

Modo produccion/normal:

```bash
npm start
```

Modo desarrollo con recarga automatica (`node --watch`):

```bash
npm run dev
```

## Variables de entorno

| Variable | Obligatoria | Default | Descripcion |
|---|---|---|---|
| `PORT` | No | `3029` | Puerto HTTP donde escucha el servidor. |

## Endpoints

| Metodo | Ruta | Descripcion |
|---|---|---|
| GET | `/health` | Verifica el estado de la API. |
| GET | `/teams` | Lista todos los equipos registrados. |
| GET | `/teams/:id` | Obtiene el detalle de un equipo por su `id`. |
| POST | `/teams` | Registra un nuevo equipo. |

### GET /teams

Respuesta `200`:

```json
{
  "ok": true,
  "data": [
    { "id": 1, "name": "Titanes FC", "modality": "futbol" },
    { "id": 2, "name": "Relampago Quinteto", "modality": "futbol sala" }
  ]
}
```

### GET /teams/:id

Respuesta `200`:

```json
{ "ok": true, "data": { "id": 1, "name": "Titanes FC", "modality": "futbol" } }
```

Respuesta `404` (cuando el `id` no existe):

```json
{ "ok": false, "message": "Equipo con id 99 no encontrado" }
```

Respuesta `400` (cuando el `id` no es numerico):

```json
{ "ok": false, "message": "id debe ser numerico" }
```

### POST /teams

Body esperado:

```json
{ "name": "Club Deportivo Pajarito", "modality": "futbol sala" }
```

Reglas de validacion:

- `name`: string obligatorio no vacio.
- `modality`: string obligatorio, valores permitidos: `"futbol"` o `"futbol sala"`.

Respuesta `201`:

```json
{ "ok": true, "data": { "id": 3, "name": "Club Deportivo Pajarito", "modality": "futbol sala" } }
```

Respuesta `400` (modalidad invalida):

```json
{ "ok": false, "message": "modality debe ser 'futbol' o 'futbol sala'" }
```

## Formato estandar de error

Todas las respuestas de error mantienen la misma estructura:

```json
{ "ok": false, "message": "descripcion del error" }
```

## Pruebas manuales con curl

```bash
curl http://localhost:3029/health
curl http://localhost:3029/teams
curl http://localhost:3029/teams/1
curl -X POST http://localhost:3029/teams -H "Content-Type: application/json" -d "{\"name\":\"Club Deportivo Pajarito\",\"modality\":\"futbol sala\"}"
```

## Estructura del proyecto

```text
src/
├── app.js              # Configuracion de Express, middlewares y rutas
├── server.js           # Punto de entrada y arranque del servidor HTTP
├── routes/
│   └── teams.routes.js
├── controllers/
│   └── teams.controller.js
└── services/
    └── teams.service.js
```
