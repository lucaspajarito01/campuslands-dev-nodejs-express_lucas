import { createLoadout } from "./services/loadout.service.js";

function main() {
  const playerArg = process.argv.length > 2 ? process.argv[2] : "Striker";

  try {
    const loadout = createLoadout(playerArg);
    console.log("Loadout competitivo asignado:");
    console.table(loadout);
  } catch (error) {
    console.error(`Error al armar loadout: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
