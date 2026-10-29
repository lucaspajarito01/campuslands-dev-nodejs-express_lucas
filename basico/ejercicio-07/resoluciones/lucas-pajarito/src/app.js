import { parseArgs, quoteCar } from "./services/quote.service.js";

function main() {
  const rawArgs = process.argv.slice(2);
  const flags = rawArgs.length > 0 ? parseArgs(rawArgs) : { brand: "Aston Martin", price: "260000" };

  try {
    const quote = quoteCar(flags);
    console.log("Cotizacion de auto de lujo:");
    console.table(quote);
  } catch (error) {
    console.error(`Error al cotizar: ${error.message}`);
    process.exitCode = 1;
  }
}

main();
