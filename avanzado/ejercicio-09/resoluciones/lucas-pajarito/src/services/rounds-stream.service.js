import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

const DEFAULT_ROUNDS = [
  { round: 1, fighter: "Lucas Pajarito", strikes: 26, kicks: 14 },
  { round: 2, fighter: "Lucas Pajarito", strikes: 31, kicks: 18 },
  { round: 3, fighter: "Lucas Pajarito", strikes: 29, kicks: 16 },
];

function createRoundScoringTransform(asNdjson = false) {
  return new Transform({
    objectMode: true,
    transform(chunk, _encoding, callback) {
      const strikes = Number(chunk.strikes);
      const kicks = Number(chunk.kicks);
      if (Number.isNaN(strikes) || strikes < 0 || Number.isNaN(kicks) || kicks < 0) {
        callback(new Error("strikes y kicks deben ser numeros mayores o iguales a 0"));
        return;
      }

      const enriched = {
        round: Number(chunk.round) || 1,
        fighter: chunk.fighter || "Peleador",
        strikes,
        kicks,
        totalPoints: strikes + kicks * 2,
      };

      if (asNdjson) {
        callback(null, JSON.stringify(enriched) + "\n");
      } else {
        callback(null, enriched);
      }
    },
  });
}

async function streamRoundsToResponse(res) {
  const source = Readable.from(DEFAULT_ROUNDS);
  const scorer = createRoundScoringTransform(true);
  await pipeline(source, scorer, res);
}

async function analyzeRoundsBatch(rounds) {
  if (!Array.isArray(rounds) || rounds.length === 0) {
    throw new Error("rounds debe ser un arreglo no vacio");
  }

  const processed = [];
  const source = Readable.from(rounds);
  const scorer = createRoundScoringTransform(false);
  const collector = new Writable({
    objectMode: true,
    write(item, _encoding, callback) {
      processed.push(item);
      callback();
    },
  });

  await pipeline(source, scorer, collector);
  return processed;
}

export { streamRoundsToResponse, analyzeRoundsBatch };
