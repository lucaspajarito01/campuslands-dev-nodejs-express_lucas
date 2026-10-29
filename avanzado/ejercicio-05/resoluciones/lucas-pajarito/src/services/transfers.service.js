let clubs = [
  { id: 1, name: "Halcones Futsal", budget: 500, maxRoster: 5, roster: ["Lucas Pajarito", "Mateo Rios"] },
  { id: 2, name: "Titanes FC", budget: 800, maxRoster: 5, roster: ["Diego Serrano"] },
];

function listClubs() {
  return clubs;
}

function executeTransfer({ fromClubId, toClubId, playerName, fee, medicalPassed = true }) {
  const numericFee = Number(fee);
  if (!playerName || typeof playerName !== "string" || !playerName.trim()) {
    throw new Error("playerName es obligatorio");
  }
  if (Number.isNaN(numericFee) || numericFee <= 0) {
    throw new Error("fee debe ser un numero mayor a 0");
  }

  // Snapshot profundo para rollback en caso de error
  const snapshot = structuredClone(clubs);

  try {
    const seller = clubs.find((c) => c.id === Number(fromClubId));
    const buyer = clubs.find((c) => c.id === Number(toClubId));

    if (!seller || !buyer || seller.id === buyer.id) {
      throw new Error("Clubes de origen y destino invalidos");
    }

    const playerIndex = seller.roster.indexOf(playerName.trim());
    if (playerIndex === -1) {
      throw new Error(`El jugador "${playerName}" no pertenece a ${seller.name}`);
    }

    // Paso 1: debitar comprador y acreditar vendedor
    if (buyer.budget < numericFee) {
      throw new Error(`Presupuesto insuficiente en ${buyer.name}`);
    }
    buyer.budget -= numericFee;
    seller.budget += numericFee;

    // Paso 2: mover jugador de plantilla
    seller.roster.splice(playerIndex, 1);
    if (buyer.roster.length >= buyer.maxRoster) {
      throw new Error(`Plantilla llena en ${buyer.name}`);
    }
    buyer.roster.push(playerName.trim());

    // Paso 3: revision medica final
    if (!medicalPassed) {
      throw new Error("El jugador no supero la revision medica; transaccion revertida (rollback)");
    }

    return {
      player: playerName.trim(),
      from: seller.name,
      to: buyer.name,
      fee: numericFee,
      buyerRemainingBudget: buyer.budget,
    };
  } catch (error) {
    // Rollback atomico al estado previo
    clubs = snapshot;
    throw error;
  }
}

export { listClubs, executeTransfer };
