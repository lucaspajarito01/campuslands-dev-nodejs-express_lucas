const characters = [
  { id: 1, name: "Rey", role: "Guerrero Real", level: 5 },
  { id: 2, name: "Lyra", role: "Maga Arcana", level: 8 },
];
let nextId = 3;

function listCharacters() {
  return characters;
}

function getCharacterById(id) {
  return characters.find((c) => c.id === Number(id)) || null;
}

function createCharacter({ name, role, level = 1 }) {
  if (!name || typeof name !== "string" || !name.trim()) {
    throw new Error("name es obligatorio");
  }
  if (!role || typeof role !== "string" || !role.trim()) {
    throw new Error("role es obligatorio");
  }
  const numericLevel = Number(level);
  if (!Number.isInteger(numericLevel) || numericLevel <= 0) {
    throw new Error("level debe ser un entero mayor a 0");
  }

  const created = {
    id: nextId++,
    name: name.trim(),
    role: role.trim(),
    level: numericLevel,
  };
  characters.push(created);
  return created;
}

function toV1Dto(character) {
  return {
    id: character.id,
    name: character.name,
    className: character.role,
    level: character.level,
  };
}

function toV2Dto(character) {
  return {
    id: character.id,
    name: character.name,
    role: character.role,
    progression: {
      level: character.level,
      xp: character.level * 1000,
    },
    stats: {
      hp: character.level * 25,
      mp: character.level * 12,
    },
  };
}

export { listCharacters, getCharacterById, createCharacter, toV1Dto, toV2Dto };
