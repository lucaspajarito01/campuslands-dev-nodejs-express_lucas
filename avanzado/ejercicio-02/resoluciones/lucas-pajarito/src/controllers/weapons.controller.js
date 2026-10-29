import { listWeapons, getWeaponById, createWeapon } from "../services/weapons.service.js";

function getWeapons(req, res) {
  res.status(200).json({ ok: true, data: listWeapons() });
}

function getWeapon(req, res) {
  const { id } = req.params;
  if (!Number.isInteger(Number(id))) {
    res.status(400).json({ ok: false, message: "id debe ser numerico" });
    return;
  }

  const weapon = getWeaponById(id);
  if (!weapon) {
    res.status(404).json({ ok: false, message: `Arma con id ${id} no encontrada` });
    return;
  }

  res.status(200).json({ ok: true, data: weapon });
}

function postWeapon(req, res, next) {
  try {
    const created = createWeapon(req.body || {});
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    next(error);
  }
}

export { getWeapons, getWeapon, postWeapon };
