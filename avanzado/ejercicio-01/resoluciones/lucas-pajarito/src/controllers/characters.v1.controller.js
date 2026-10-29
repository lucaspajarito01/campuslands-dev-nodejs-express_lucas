import { listCharacters, getCharacterById, toV1Dto } from "../services/characters.service.js";

function getCharactersV1(req, res) {
  const data = listCharacters().map(toV1Dto);
  res.status(200).json({ ok: true, version: "v1", data });
}

function getCharacterV1(req, res) {
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

  res.status(200).json({ ok: true, version: "v1", data: toV1Dto(character) });
}

export { getCharactersV1, getCharacterV1 };
