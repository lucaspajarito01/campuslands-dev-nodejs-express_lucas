const weaponsStore = [
  { id: 1, name: "Vandal", category: "rifle", damage: 40, fireRate: 9.75 },
  { id: 2, name: "Phantom", category: "rifle", damage: 39, fireRate: 11.0 },
];
let nextId = 3;

function findAll() {
  return [...weaponsStore];
}

function findById(id) {
  return weaponsStore.find((w) => w.id === Number(id)) || null;
}

function save({ name, category, damage, fireRate }) {
  const record = { id: nextId++, name, category, damage, fireRate };
  weaponsStore.push(record);
  return record;
}

export { findAll, findById, save };
