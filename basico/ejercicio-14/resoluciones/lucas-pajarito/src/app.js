import { validateBook } from "./services/book-validator.service.js";

function main() {
  const rawArgs = process.argv.slice(2);
  const [title, author, pages, year] =
    rawArgs.length > 0 ? rawArgs : ["El olvido que seremos", "Hector Abad Faciolince", "274", "2006"];
  const book = { title, author, pages: Number(pages), year: Number(year) };

  const { valid, errors } = validateBook({ title, author, pages, year });

  if (!valid) {
    console.error("Libro invalido:");
    errors.forEach((message) => console.error(`- ${message}`));
    process.exitCode = 1;
    return;
  }

  console.log("Libro valido:");
  console.table(book);
}

main();
