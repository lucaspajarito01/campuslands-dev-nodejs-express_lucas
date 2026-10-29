import { streamRoundsToResponse, analyzeRoundsBatch } from "../services/rounds-stream.service.js";

async function getRoundsStream(req, res) {
  res.setHeader("Content-Type", "application/x-ndjson; charset=utf-8");
  await streamRoundsToResponse(res);
}

async function postAnalyzeRounds(req, res) {
  try {
    const data = await analyzeRoundsBatch((req.body || {}).rounds);
    res.status(200).json({ ok: true, data });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
}

export { getRoundsStream, postAnalyzeRounds };
