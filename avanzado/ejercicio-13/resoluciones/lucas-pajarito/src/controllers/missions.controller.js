import { listMissions, createMission } from "../services/missions.service.js";

function getMissions(req, res) {
  res.status(200).json({ ok: true, requestId: req.requestId, data: listMissions() });
}

function postMission(req, res) {
  try {
    const mission = createMission(req.body || {});
    res.status(201).json({ ok: true, requestId: req.requestId, data: mission });
  } catch (error) {
    res.status(400).json({ ok: false, requestId: req.requestId, message: error.message });
  }
}

export { getMissions, postMission };
