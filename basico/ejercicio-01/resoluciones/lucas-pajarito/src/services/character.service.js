const CLASSES = ["Guerrero Real", "Paladin", "Mago Arcano", "Arquero Sombrío"];

function createCharacter(name, rank = 5, weakness = "las espadas de fuego") {
  if (!name || typeof name !== "string" || !name.trim()) {
    throw new Error("El nombre del personaje es obligatorio");
  }

  const numericRank = Number(rank);
  if (Number.isNaN(numericRank) || numericRank <= 0) {
    throw new Error("El rango debe ser un numero mayor a 0");
  }

  const characterClass = CLASSES[Math.floor(Math.random() * CLASSES.length)];

  return {
    name: name.trim(),
    class: characterClass,
    rank: numericRank,
    hp: numericRank * 25,
    mp: numericRank * 12,
    weakness: weakness.trim(),
  };
}

export { createCharacter };
