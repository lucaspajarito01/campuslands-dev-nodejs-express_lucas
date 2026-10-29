import * as weaponsRepo from "../repositories/weapons.repository.js";

const VALID_CATEGORIES = ["rifle", "smg", "sniper", "shotgun", "pistol"];

function enrichWithMetrics(weapon) {
  return {
    ...weapon,
    dps: Number((weapon.damage * weapon.fireRate).toFixed(2)),
  };
}

function listWeapons() {
  return weaponsRepo.findAll().map(enrichWithMetrics);
}

function getWeaponById(id) {
  const weapon = weaponsRepo.findById(id);
  if (!weapon) return null;
  return enrichWithMetrics(weapon);
}

function createWeapon({ name, category, damage, fireRate }) {
  if (!name || typeof name !== "string" || !name.trim()) {
    const err = new Error("name es obligatorio");
    err.status = 400;
    throw err;
  }
  if (!VALID_CATEGORIES.includes(category)) {
    const err = new Error(`category debe ser uno de: ${VALID_CATEGORIES.join(", ")}`);
    err.status = 400;
    throw err;
  }
  const numericDamage = Number(damage);
  const numericRate = Number(fireRate);
  if (Number.isNaN(numericDamage) || numericDamage <= 0 || Number.isNaN(numericRate) || numericRate <= 0) {
    const err = new Error("damage y fireRate deben ser numeros mayores a 0");
    err.status = 400;
    throw err;
  }

  const created = weaponsRepo.save({
    name: name.trim(),
    category,
    damage: numericDamage,
    fireRate: numericRate,
  });

  return enrichWithMetrics(created);
}

export { listWeapons, getWeaponById, createWeapon };
