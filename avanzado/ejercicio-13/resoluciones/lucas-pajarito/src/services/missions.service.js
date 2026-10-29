const missions = [
  { id: 1, codename: "Odisea Centauri", sector: "Alpha Centauri" },
];
let nextId = 2;

function listMissions() {
  return missions;
}

function createMission({ codename, sector }) {
  if (!codename || typeof codename !== "string" || !codename.trim()) {
    throw new Error("codename es obligatorio");
  }
  if (!sector || typeof sector !== "string" || !sector.trim()) {
    throw new Error("sector es obligatorio");
  }

  const mission = { id: nextId++, codename: codename.trim(), sector: sector.trim() };
  missions.push(mission);
  return mission;
}

export { listMissions, createMission };
