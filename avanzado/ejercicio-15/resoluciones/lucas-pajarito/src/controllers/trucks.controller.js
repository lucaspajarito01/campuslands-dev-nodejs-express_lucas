import { listTrucks, createTruck } from "../services/trucks.service.js";

function getTrucks(req, res) {
  res.status(200).json({ ok: true, data: listTrucks() });
}

function postTruck(req, res) {
  try {
    const truck = createTruck(req.body || {});
    res.status(201).json({ ok: true, data: truck });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
}

export { getTrucks, postTruck };
