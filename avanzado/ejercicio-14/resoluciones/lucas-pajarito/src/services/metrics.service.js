const state = {
  totalRequests: 0,
  totalDurationMs: 0,
  byMethod: {},
  byStatus: {},
};

function recordRequestMetric({ method, statusCode, durationMs }) {
  state.totalRequests += 1;
  state.totalDurationMs += durationMs;
  state.byMethod[method] = (state.byMethod[method] || 0) + 1;
  state.byStatus[statusCode] = (state.byStatus[statusCode] || 0) + 1;
}

function getMetricsSnapshot() {
  const avgResponseTimeMs =
    state.totalRequests > 0 ? Number((state.totalDurationMs / state.totalRequests).toFixed(2)) : 0;

  return {
    uptimeSeconds: Math.floor(process.uptime()),
    totalRequests: state.totalRequests,
    avgResponseTimeMs,
    byMethod: { ...state.byMethod },
    byStatus: { ...state.byStatus },
  };
}

export { recordRequestMetric, getMetricsSnapshot };
