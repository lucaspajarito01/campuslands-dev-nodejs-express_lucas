# Ejercicio 01 - Node runtime y consola (Lucas Pajarito)

## Que hace

Solucion en Node.js con tematica de **videojuegos RPG** que muestra la informacion del entorno de ejecucion (version de Node, plataforma, arquitectura y PID) y construye la ficha de un personaje RPG (por defecto `Rey`, rango `5`, debilidad `las espadas de fuego`), mostrandola con `console.table`. Incluye validacion de datos y salida de error con `console.error` y `process.exitCode = 1`.

## Como ejecutar

```bash
npm install
npm start
```

Modo desarrollo con recarga automatica:

```bash
npm run dev
```

Opcionalmente puedes pasar el nombre del personaje y su rango por argumentos de consola:

```bash
node src/app.js "Rey" 5 "las espadas de fuego"
```

## Como probar el caso de error

```bash
node -e "import('./src/services/character.service.js').then(m => m.createCharacter(''))"
```

Debe lanzar `Error: El nombre del personaje es obligatorio`.

## Estructura

```text
src/
├── app.js
└── services/
    └── character.service.js
```
