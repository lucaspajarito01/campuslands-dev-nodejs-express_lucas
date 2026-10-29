import { createReadStream } from "node:fs";
import readline from "node:readline";
import { Readable } from "node:stream";

const CSV_PATH = new URL("../data/matches.csv", import.meta.url);

async function parseCsvStream(inputStream) {
  const rl = readline.createInterface({ input: inputStream, crlfDelay: Infinity });
  let headers = null;
  let lineNumber = 0;
  const rows = [];

  for await (const rawLine of rl) {
    lineNumber++;
    const line = rawLine.trim();
    if (!line) continue;

    if (!headers) {
      headers = line.split(",").map((h) => h.trim());
      continue;
    }

    const values = line.split(",").map((v) => v.trim());
    const record = Object.fromEntries(headers.map((h, i) => [h, values[i]]));

    const scoreA = Number(record.scoreA);
    const scoreB = Number(record.scoreB);

    if (!record.playerA || !record.playerB || Number.isNaN(scoreA) || Number.isNaN(scoreB)) {
      throw new Error(`Fila CSV invalida en linea ${lineNumber}`);
    }

    rows.push({
      playerA: record.playerA,
      playerB: record.playerB,
      scoreA,
      scoreB,
      winner: scoreA >= scoreB ? record.playerA : record.playerB,
    });
  }

  return rows;
}

async function readMatchesFromDisk(playerFilter) {
  const rows = await parseCsvStream(createReadStream(CSV_PATH, "utf-8"));
  if (!playerFilter) return rows;
  return rows.filter((m) => m.playerA === playerFilter || m.playerB === playerFilter);
}

async function parseCustomCsvString(csvText) {
  if (!csvText || typeof csvText !== "string" || !csvText.trim()) {
    throw new Error("csv es obligatorio");
  }
  return parseCsvStream(Readable.from(csvText.split(/\r?\n/).map((l) => l + "\n")));
}

export { readMatchesFromDisk, parseCustomCsvString };
