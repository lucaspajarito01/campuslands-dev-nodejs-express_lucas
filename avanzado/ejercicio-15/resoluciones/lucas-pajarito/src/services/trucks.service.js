const trucks = [
  { id: 1, name: "El Trompo Urbano", specialty: "Tacos al pastor" },
];
let nextId = 2;

function listTrucks() {
  return trucks;
}

function createTruck({ name, specialty }) {
  if (!name || typeof name !== "string" || !name.trim()) {
    throw new Error("name es obligatorio");
  }
  if (!specialty || typeof specialty !== "string" || !specialty.trim()) {
    throw new Error("specialty es obligatorio");
  }

  const truck = { id: nextId++, name: name.trim(), specialty: specialty.trim() };
  trucks.push(truck);
  return truck;
}

export { listTrucks, createTruck };
