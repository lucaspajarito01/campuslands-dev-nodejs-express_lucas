const store = new Map();
let hits = 0;
let misses = 0;

function get(key) {
  const entry = store.get(key);
  if (!entry) {
    misses++;
    return null;
  }

  if (Date.now() > entry.expiresAt) {
    store.delete(key);
    misses++;
    return null;
  }

  hits++;
  return entry.value;
}

function set(key, value, ttlMs = 30000) {
  store.set(key, {
    value,
    expiresAt: Date.now() + ttlMs,
  });
}

function invalidate(key) {
  store.delete(key);
}

function getStats() {
  return { hits, misses, keysCached: store.size };
}

export { get, set, invalidate, getStats };
