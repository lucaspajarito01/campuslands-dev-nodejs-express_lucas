function playTrack(trackName) {
  return new Promise((resolve, reject) => {
    if (!trackName || typeof trackName !== "string" || !trackName.trim()) {
      reject(new Error("El nombre de la cancion es obligatorio"));
      return;
    }

    setTimeout(() => {
      resolve({
        track: trackName.trim(),
        durationSeconds: Math.floor(Math.random() * 210) + 90,
      });
    }, 250);
  });
}

export { playTrack };
