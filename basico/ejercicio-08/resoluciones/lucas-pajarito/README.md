# Ejercicio 08 - variables de entorno (Lucas Pajarito)

## Que hace

Tematica **hiperdeportivos**. Carga variables de entorno desde `env.example` (sin secretos reales) usando el soporte nativo de Node 20+ (`--env-file-if-exists`) y valida `TRACK_NAME` y `MAX_SPEED` en `config.service.js`.

## Como ejecutar

```bash
npm install
npm start
```

## Como probar el caso de error

En Bash:

```bash
MAX_SPEED=invalido npm start
```

En PowerShell:

```powershell
$env:MAX_SPEED="invalido"; npm start
```

Debe mostrar `Error de configuracion: MAX_SPEED debe ser un numero mayor a 0`.

## Estructura

```text
env.example
src/
├── app.js
└── services/
    └── config.service.js
```
