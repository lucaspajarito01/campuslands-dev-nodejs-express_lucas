const PRIMARY_WEAPONS = ["Vandal", "Phantom", "Operator", "Bulldog"];
const UTILITIES = ["Granada de humo", "Flashbang", "Molotov", "Dron de reconocimiento"];

function createLoadout(playerName) {
  if (!playerName || typeof playerName !== "string" || !playerName.trim()) {
    throw new Error("El nombre del jugador es obligatorio");
  }

  const weapon = PRIMARY_WEAPONS[Math.floor(Math.random() * PRIMARY_WEAPONS.length)];
  const utility = UTILITIES[Math.floor(Math.random() * UTILITIES.length)];

  return {
    player: playerName.trim(),
    weapon,
    utility,
    ammo: Math.floor(Math.random() * 90) + 30,
    armor: 100,
  };
}

export { createLoadout };
