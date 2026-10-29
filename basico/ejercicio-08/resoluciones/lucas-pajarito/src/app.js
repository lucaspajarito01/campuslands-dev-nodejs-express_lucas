import { loadConfig } from "./services/config.service.js";

function main() {
  try {
    const config = loadConfig();
    console.log("Configuracion de pista para hiperdeportivos:");
    console.table(config);
  } catch (error) {
    console.error(`Error de configuracion: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
