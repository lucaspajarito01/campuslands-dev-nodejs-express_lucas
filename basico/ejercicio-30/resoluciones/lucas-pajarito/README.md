# Proyecto integrador basico - Taller de motos (Lucas Pajarito)

API REST integradora para gestionar ordenes de servicio en un **taller de motos y mecanica**. Reune los conceptos de todo el nivel basico: separacion en capas (`routes`, `controllers`, `services`, `middlewares`, `config`), CRUD en memoria, validaciones, manejo centralizado de errores, codigos de estado HTTP (`200`, `201`, `204`, `400`, `404`, `409`, `500`), logs por peticion y configuracion por entorno.

## Requisitos

- Node.js 20 o superior.

## Instalacion y ejecucion

```bash
npm install
npm start
```

En desarrollo con recarga automatica:

```bash
npm run dev
```

## Variables de entorno

| Variable | Obligatoria | Default | Descripcion |
|---|---|---|---|
| `PORT` | No | `3030` | Puerto del servidor HTTP. |
| `NODE_ENV` | No | `development` | `development` \| `production` \| `test`. Define el nivel de log. |

## Endpoints

| Metodo | Ruta | Descripcion |
|---|---|---|
| GET | `/health` | Estado del servidor y entorno activo. |
| GET | `/orders` | Lista todas las ordenes de trabajo. |
| GET | `/orders/:id` | Obtiene una orden por su `id`. |
| POST | `/orders` | Crea una nueva orden con status inicial `pendiente`. |
| PATCH | `/orders/:id/status` | Actualiza el status de una orden. |
| DELETE | `/orders/:id` | Elimina una orden de trabajo. |

### POST /orders

Body:

```json
{ "moto": "Kawasaki Ninja 400", "problema": "ajuste de kit de arrastre" }
```

Respuesta `201` (incluye header `Location`):

```json
{
  "ok": true,
  "data": {
    "id": 3,
    "moto": "Kawasaki Ninja 400",
    "problema": "ajuste de kit de arrastre",
    "status": "pendiente"
  }
}
```

### PATCH /orders/:id/status

Body:

```json
{ "status": "en_proceso" }
```

Valores permitidos para `status`: `pendiente`, `en_proceso`, `finalizado`. Si la orden ya esta en `finalizado`, responde `409 Conflict`.

## Codigos de estado

| Codigo | Caso |
|---|---|
| 200 | Consulta o actualizacion exitosa. |
| 201 | Orden creada exitosamente. |
| 204 | Orden eliminada sin contenido en respuesta. |
| 400 | Datos de entrada o parametros invalidos. |
| 404 | Orden o ruta no encontrada. |
| 409 | Intento de modificar una orden ya finalizada. |
| 500 | Error interno capturado por el middleware central. |

## Como probar

```bash
curl http://localhost:3030/health
curl http://localhost:3030/orders
curl -X POST http://localhost:3030/orders -H "Content-Type: application/json" -d "{\"moto\":\"Kawasaki Ninja 400\",\"problema\":\"ajuste de kit de arrastre\"}"
curl -X PATCH http://localhost:3030/orders/1/status -H "Content-Type: application/json" -d "{\"status\":\"en_proceso\"}"
curl -X DELETE http://localhost:3030/orders/2
```

Caso de conflicto (`409`):

```bash
curl -X PATCH http://localhost:3030/orders/1/status -H "Content-Type: application/json" -d "{\"status\":\"finalizado\"}"
curl -X PATCH http://localhost:3030/orders/1/status -H "Content-Type: application/json" -d "{\"status\":\"pendiente\"}"
```

## Estructura

```text
src/
├── app.js
├── server.js
├── config/
│   └── index.js
├── routes/
│   ├── index.js
│   └── orders.routes.js
├── controllers/
│   └── orders.controller.js
├── services/
│   └── orders.service.js
└── middlewares/
    ├── error-handler.js
    └── request-logger.js
```
