import shrinkZone, { MAX_RADIUS } from "./services/zone.service.js";

function main() {
  const radiusArg = process.argv.length > 2 ? Number(process.argv[2]) : MAX_RADIUS;

  try {
    const zone = shrinkZone(radiusArg);
    console.log(`Radio inicial maximo del mapa: ${MAX_RADIUS}m`);
    console.log("Cierre de zona segura:");
    console.table(zone);
  } catch (error) {
    console.error(`Error al reducir zona: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
