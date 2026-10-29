# Avanzado 05 - transacciones simuladas (Lucas Pajarito)

## Que hace

Tematica **futbol y futbol sala**. Simula una **transaccion atomica con rollback** en memoria para el fichaje de un jugador entre dos clubes (`POST /transfers`):

1. Toma un snapshot del estado de los clubes antes de iniciar.
2. Descuenta el monto de transferencia del club comprador y lo acredita al club vendedor.
3. Retira al jugador del club origen y valida el cupo de plantilla y revision medica en el club destino.
4. Si cualquier paso intermedio falla, ejecuta **rollback automatico** restaurando el snapshot original para evitar estados inconsistentes.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar

Transferencia exitosa:

```bash
curl http://localhost:4005/clubs
curl -X POST http://localhost:4005/transfers -H "Content-Type: application/json" -d "{\"fromClubId\":1,\"toClubId\":2,\"playerName\":\"Lucas Pajarito\",\"fee\":300,\"medicalPassed\":true}"
```

## Como probar el caso de rollback

Fallo en revision medica despues de mover presupuesto (verifica con `GET /clubs` que los saldos y plantillas quedaron intactos tras el rollback):

```bash
curl -X POST http://localhost:4005/transfers -H "Content-Type: application/json" -d "{\"fromClubId\":1,\"toClubId\":2,\"playerName\":\"Mateo Rios\",\"fee\":200,\"medicalPassed\":false}"
curl http://localhost:4005/clubs
```

## Estructura

```text
src/
├── app.js
├── server.js
├── routes/
│   └── transfers.routes.js
├── controllers/
│   └── transfers.controller.js
└── services/
    └── transfers.service.js
```
