const movies = [
  { id: 1, title: "El Exorcista", year: 1973, subgenre: "sobrenatural" },
  { id: 2, title: "El Conjuro", year: 2013, subgenre: "sobrenatural" },
  { id: 3, title: "Halloween", year: 1978, subgenre: "slasher" },
  { id: 4, title: "Hereditary", year: 2018, subgenre: "psicologico" },
];

function buildExportBundle({ minYear, subgenre } = {}) {
  if (minYear !== undefined && Number.isNaN(Number(minYear))) {
    throw new Error("minYear debe ser numerico");
  }

  const items = movies.filter((m) => {
    if (minYear !== undefined && m.year < Number(minYear)) return false;
    if (subgenre && m.subgenre !== subgenre) return false;
    return true;
  });

  return {
    exportedAt: new Date().toISOString(),
    totalRecords: items.length,
    filters: { minYear: minYear ? Number(minYear) : null, subgenre: subgenre || null },
    items,
  };
}

export { buildExportBundle };
