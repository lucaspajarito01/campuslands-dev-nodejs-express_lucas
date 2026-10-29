function playRally(playerName, callback) {
  if (!playerName || typeof playerName !== "string" || !playerName.trim()) {
    callback(new Error("El nombre del jugador es obligatorio"));
    return;
  }

  setTimeout(() => {
    const strokes = Math.floor(Math.random() * 14) + 3;
    callback(null, { player: playerName.trim(), strokes });
  }, 250);
}

export { playRally };
