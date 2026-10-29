import { listClubs, executeTransfer } from "../services/transfers.service.js";

function getClubs(req, res) {
  res.status(200).json({ ok: true, data: listClubs() });
}

function postTransfer(req, res) {
  try {
    const result = executeTransfer(req.body || {});
    res.status(201).json({ ok: true, message: "Transferencia completada", data: result });
  } catch (error) {
    res.status(409).json({ ok: false, rolledBack: true, message: error.message });
  }
}

export { getClubs, postTransfer };
