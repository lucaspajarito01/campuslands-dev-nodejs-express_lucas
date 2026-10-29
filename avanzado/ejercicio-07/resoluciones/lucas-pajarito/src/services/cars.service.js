import * as cache from "./cache.service.js";

const CACHE_KEY = "luxury_cars_catalog";

const cars = [
  { id: 1, brand: "Rolls-Royce", model: "Ghost", price: 350000 },
  { id: 2, brand: "Ferrari", model: "Roma", price: 250000 },
];
let nextId = 3;

function listCarsWithCache() {
  const cached = cache.get(CACHE_KEY);
  if (cached) {
    return { source: "cache", data: cached };
  }

  const snapshot = [...cars];
  cache.set(CACHE_KEY, snapshot, 30000);
  return { source: "origin", data: snapshot };
}

function createCar({ brand, model, price }) {
  if (!brand || typeof brand !== "string" || !brand.trim()) {
    throw new Error("brand es obligatorio");
  }
  if (!model || typeof model !== "string" || !model.trim()) {
    throw new Error("model es obligatorio");
  }
  const numericPrice = Number(price);
  if (!price || Number.isNaN(numericPrice) || numericPrice <= 0) {
    throw new Error("price debe ser un numero mayor a 0");
  }

  const created = { id: nextId++, brand: brand.trim(), model: model.trim(), price: numericPrice };
  cars.push(created);
  cache.invalidate(CACHE_KEY);
  return created;
}

export { listCarsWithCache, createCar };
