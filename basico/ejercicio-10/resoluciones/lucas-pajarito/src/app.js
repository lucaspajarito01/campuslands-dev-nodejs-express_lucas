import { playRally } from "./services/rally.service.js";

function main() {
  const playerArg = process.argv.length > 2 ? process.argv[2] : "Lucas";

  console.log("Iniciando saque de pingpong...");

  playRally(playerArg, (error, result) => {
    if (error) {
      console.error(`Error en el rally: ${error.message}`);
      process.exitCode = 1;
      return;
    }
    console.log("Rally finalizado:");
    console.table(result);