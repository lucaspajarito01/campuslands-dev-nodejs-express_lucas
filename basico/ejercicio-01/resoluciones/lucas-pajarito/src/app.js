import { createCharacter } from "./services/character.service.js";

function printRuntimeInfo() {
  console.log("=== RPG Node Runtime Info ===");
  console.log(`Node version: ${process.version}`);
  console.log(`Plataforma: ${process.platform} (${process.arch})`);
  console.log(`PID: ${process.pid}`);
}

function main() {
  printRuntimeInfo();

  const nombreJugador = process.argv[2] !== undefined ? process.argv[2] : "Rey";
  const rango = process.argv[3] !== undefined ? Number(process.argv[3]) : 5;
  const debilidad = process.argv[4] !== undefined ? process.argv[4] : "las espadas de fuego";

  try {
    const character = createCharacter(nombreJugador, rango, debilidad);
    console.log(`\nNuestro ${character.name} ha tenido un rango de ${character.rank} pero tiene como debilidad ${character.weakness}.`);
    console.table(character);
  } catch (error) {
    console.error(`Error al crear personaje: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
