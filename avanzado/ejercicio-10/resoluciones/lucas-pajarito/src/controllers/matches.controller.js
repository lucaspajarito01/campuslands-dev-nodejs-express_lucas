import { readMatchesFromDisk, parseCustomCsvString } from "../services/csv-reader.service.js";

async function getMatches(req, res) {
  try {
    const matches = await readMatchesFromDisk(req.query.player);
    res.status(200).json({ ok: true, data: matches });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
}

async function postParseCsv(req, res) {
  try {
    const parsed = await parseCustomCsvString((req.body || {}).csv);
    res.status(200).json({ ok: true, data: parsed });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
}

export { getMatches, postParseCsv };
