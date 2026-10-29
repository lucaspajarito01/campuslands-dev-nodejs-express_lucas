const MAX_RADIUS = 1200;

function shrinkZone(currentRadius) {
  if (typeof currentRadius !== "number" || Number.isNaN(currentRadius)) {
    throw new Error("El radio actual debe ser un numero");
  }
  if (currentRadius <= 0) {
    throw new Error("El radio actual debe ser mayor a 0");
  }

  const nextRadius = Math.max(Math.floor(currentRadius * 0.65), 0);

  return {
    previousRadius: currentRadius,
    nextRadius,
    survivorsEstimated: Math.max(Math.floor(nextRadius / 12), 1),
  };
}

export { MAX_RADIUS, shrinkZone };
export default shrinkZone;
