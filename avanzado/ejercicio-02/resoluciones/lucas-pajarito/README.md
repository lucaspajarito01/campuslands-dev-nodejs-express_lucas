# Avanzado 02 - arquitectura escalable (Lucas Pajarito)

## Que hace

Tematica **shooters competitivos**. Organiza el proyecto en capas desacopladas (`repositories`, `services`, `controllers`, `routes`, `middlewares`):

- **Repository (`weapons.repository.js`)**: abstrae el acceso y persistencia en memoria de las armas.
- **Service (`weapons.service.js`)**: aplica reglas de negocio y calcula metricas competitivas como el `dps` (dano por segundo).
- **Controller (`weapons.controller.js`)**: traduce entre HTTP y el servicio.
- **Routes (`weapons.routes.js`)**: define las rutas del modulo `/weapons`.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

```bash
curl http://localhost:4002/weapons
curl http://localhost:4002/weapons/1
curl -X POST http://localhost:4002/weapons -H "Content-Type: application/json" -d "{\"name\":\"Operator\",\"category\":\"sniper\",\"damage\":150,\"fireRate\":1.2}"
```

## Como probar el caso de error

```bash
curl -X POST http://localhost:4002/weapons -H "Content-Type: application/json" -d "{\"name\":\"Operator\",\"category\":\"invalida\",\"damage\":-10,\"fireRate\":0}"
```

Responde `400` con el detalle de la validacion.

## Estructura

```text
src/
├── app.js
├── server.js
├── repositories/
│   └── weapons.repository.js
├── services/
│   └── weapons.service.js
├── controllers/
│   └── weapons.controller.js
├── routes/
│   └── weapons.routes.js
└── middlewares/
    └── error-handler.js
```
