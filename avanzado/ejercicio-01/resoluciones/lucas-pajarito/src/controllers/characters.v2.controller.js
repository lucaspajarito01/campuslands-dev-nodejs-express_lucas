import { listCharacters, getCharacterById, createCharacter, toV2Dto } from "../services/characters.service.js";

function getCharactersV2(req, res) {
  res.set("X-API-Version", "v2");
  const data = listCharacters().map(toV2Dto);
  res.status(200).json({ ok: true, version: "v2", data });
}

function getCharacterV2(req, res) {
  res.set("X-API-Version", "v2");
  const { id } = req.params;
  if (!Number.isInteger(Number(id))) {
    res.status(400).json({ ok: false, message: "id debe ser numerico" });
    return;
  }

  const character = getCharacterById(id);
  if (!character) {
    res.status(404).json({ ok: false, message: `Personaje con id ${id} no encontrado` });
    return;
  }

  res.status(200).json({ ok: true, version: "v2", data: toV2Dto(character) });
}

function postCharacterV2(req, res) {
  res.set("X-API-Version", "v2");
  try {
    const created = createCharacter(req.body || {});
    res.status(201).json({ ok: true, version: "v2", data: toV2Dto(created) });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
}

export { getCharactersV2, getCharacterV2, postCharacterV2 };
